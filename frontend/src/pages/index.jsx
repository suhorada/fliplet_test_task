import React, { useEffect, useState } from "react";
import MainInputBlock from "../components/MainInputBlock";
import NewsBlock from "../components/NewsBlock";
import axios from "axios";

function MainPage() {
  const [news, setNews] = useState([]);
  const [inputUrl, setInputUrl] = useState();

  function getData(rss_url) {
    if (rss_url) {
      const url = "http://localhost:3030/news/rss";
      return axios.get(url, { params: { rss_url } }).then((res) => {
        setNews(res.data);
      });
    }
  }

  useEffect(() => {
    getData(inputUrl);
  }, [setNews, inputUrl]);

  console.log(news);

  return (
    <div className="container">
      <MainInputBlock setInputUrl={setInputUrl} />
      <NewsBlock news={news.items} img={news.feed?.image} />
    </div>
  );
}

export default MainPage;
