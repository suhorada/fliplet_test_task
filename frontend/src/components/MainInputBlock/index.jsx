import React from "react";
import InputForm from "../common/Form";

function MainInputBlock({setInputUrl}) {
  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <h1>RSS Feeds</h1>
        </div>
      </div>
      <InputForm setInputUrl={setInputUrl}/>
    </>
  );
}

export default MainInputBlock;
