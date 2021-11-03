import React from "react";

function NewsCard({ article, img }) {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={img}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">
          {article.description}
        </p>
        <a href={article.link} className="btn btn-primary" target="_blank" rel="noreferrer">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
