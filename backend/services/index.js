const ws = require('../web-service');

async function rssToJSON(rss_url) {
  const jsonData = await ws.getFromRSS2JSON(rss_url);
  return jsonData;
}

module.exports = {
  rssToJSON,
};
