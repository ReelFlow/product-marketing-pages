exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const WEBFLOW_API_TOKEN = process.env.WEBFLOW_API_TOKEN;
  const COLLECTION_ID = "69a10cbdc91986f8c6506cd1";

  if (!WEBFLOW_API_TOKEN) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "WEBFLOW_API_TOKEN not configured" }),
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON body" }) };
  }

  let { fieldData } = payload;
  if (!fieldData) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing fieldData" }) };
  }

  // Sanitise reference fields — Webflow expects plain ID strings, not objects
  // Claude sometimes returns {id: '...', image: '...'} instead of just '...'
  const sanitiseRefs = (arr) => {
    if (!Array.isArray(arr)) return arr;
    return arr.map(item => {
      if (typeof item === 'string') return item;
      if (typeof item === 'object' && item !== null && item.id) return item.id;
      return item;
    });
  };

  if (fieldData['feature-blocks']) fieldData['feature-blocks'] = sanitiseRefs(fieldData['feature-blocks']);
  if (fieldData['faqs']) fieldData['faqs'] = sanitiseRefs(fieldData['faqs']);
  if (fieldData['steps-items']) fieldData['steps-items'] = sanitiseRefs(fieldData['steps-items']);

  try {
    const response = await fetch(
      `https://api.webflow.com/v2/collections/${COLLECTION_ID}/items`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${WEBFLOW_API_TOKEN}`,
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          isArchived: false,
          isDraft: true,
          fieldData,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: data }),
      };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: data.id, slug: data.fieldData?.slug }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
