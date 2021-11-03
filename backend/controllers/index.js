const indexService = require('../services');

async function getDataFromRSS(req, res) {
  try {
    const response = await indexService.rssToJSON(req.query.rss_url);
    res.status(200).send(response.data);
  } catch (err) {
    console.log(err)
    res.status(500).send(err);
  }
}

module.exports = {
  getDataFromRSS,
};
