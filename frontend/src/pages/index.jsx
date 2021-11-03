import React, { useEffect, useState } from "react";
import MainInputBlock from "../components/MainInputBlock";
import NewsBlock from "../components/NewsBlock";
import axios from "axios";
import { getNewsLS, setNewsLS } from "../utils";

function MainPage() {
  const [news, setNews] = useState([]);
  const [inputUrl, setInputUrl] = useState();
  const [loading, setLoading] = useState(false);

  function getData(rss_url) {
    if (rss_url) {
      if (!getNewsLS(rss_url)) {
        setLoading(true);
        const url = "http://localhost:3030/news/rss";
        return axios.get(url, { params: { rss_url } }).then((res) => {
          setNews(res.data);
          setNewsLS(res.data, rss_url);
        });
      } else setNews(getNewsLS(rss_url));
    }
  }

  useEffect(() => {
    getData(inputUrl);
    setLoading(false);
  }, [setNews, inputUrl, setLoading]);

  console.log(news);

  return (
    <div className="container">
      <MainInputBlock setInputUrl={setInputUrl} loading={loading} />
      <NewsBlock news={news.items} img={news.feed?.image} />
    </div>
  );
}

export default MainPage;
