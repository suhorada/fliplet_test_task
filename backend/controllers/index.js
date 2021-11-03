const service = require('../services');

async function getDataFromRSS(req, res) {
  try {
    res.status(200).send(service.rssToJSON(req.query.rssurl));
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = {
  getDataFromRSS,
};
