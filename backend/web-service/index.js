const { default: axios } = require('axios');

const rss2jsonURL = process.env.RSS2JSON_URL;

async function getFromRSS2JSON(rss_url) {
  return axios.get(
    rss2jsonURL,
    { params: { rss_url } },
  );
}

module.exports = {
  getFromRSS2JSON,
};
