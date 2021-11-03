const { default: axios } = require("axios");

describe("Sample Test", () => {
  it("Try to get some response from request", async () => {
    const getFrom = await axios.get('http://localhost:3030/news/rss', {params: {rss_url: 'https://fliplet.com/feed/'}})
    expect(!getFrom).toBeFalsy();
  });
});
