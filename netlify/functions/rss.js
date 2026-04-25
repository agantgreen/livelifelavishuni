// ── Netlify Function: RSS Proxy ────────────────────────────
// Fetches RSS feeds server-side, no CORS issues.
// Called from the app as: /.netlify/functions/rss?url=FEED_URL

exports.handler = async (event) => {
  const url = event.queryStringParameters?.url;

  if (!url) {
    return { statusCode: 400, body: 'Missing url parameter' };
  }

  // Only allow your own feeds for security
  const allowed = [
    'lifewithlexiskai.com/feed',
    'anchor.fm/s/f336fe2c/podcast/rss',
  ];
  const isAllowed = allowed.some(a => url.includes(a));
  if (!isAllowed) {
    return { statusCode: 403, body: 'Feed not allowed' };
  }

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; LLLUApp/1.0)',
        'Accept': 'application/rss+xml, application/xml, text/xml, */*',
      },
    });

    if (!res.ok) throw new Error(`Feed returned ${res.status}`);

    const xml = await res.text();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300', // cache 5 min
      },
      body: xml,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
