import React from "react";
import NewsCard from "../common/NewsCard";

function NewsBlock({ news = [], img }) {
  return (
    <div className="row">
      <div className="col-xl-12">
        <h1>Articles</h1>
        {news.map((article) => (
          <NewsCard key={Math.random() * 1000} article={article} img={img} />
        ))}
      </div>
    </div>
  );
}

export default NewsBlock;
