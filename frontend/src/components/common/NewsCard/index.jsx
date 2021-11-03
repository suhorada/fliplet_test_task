import React from "react";

function NewsCard(props) {
  console.log(props.data);
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="https://loremflickr.com/320/140"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">Article title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
