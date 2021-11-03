import React, { useEffect, useState } from "react";
import MainInputBlock from "../components/MainInputBlock";
import NewsBlock from "../components/NewsBlock";

function MainPage() {
  const [news, setNews] = useState([]);

  // useEffect(() => {
  //   setNews();
  // });

  return (
    <div className="container">
      <MainInputBlock />
      <NewsBlock />
    </div>
  );
}

export default MainPage;
