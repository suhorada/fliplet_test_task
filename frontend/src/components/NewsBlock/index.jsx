import React from "react";
import NewsCard from "../common/NewsCard";

function NewsBlock(props) {
  const news = props.news;

  return (
    <div class="row">
      <div class="col-xl-12">
        <h1>Articles</h1>
        {/* {news.map((article) => (<NewsCard data={article}/>))} */}
        <NewsCard />
      </div>
    </div>
  );
}

export default NewsBlock;
