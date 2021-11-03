import React from "react";
import InputForm from "../common/Form";

function MainInputBlock({ setInputUrl, loading }) {
  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <h1>RSS Feeds</h1>
        </div>
      </div>
      <InputForm setInputUrl={setInputUrl} loading={loading} />
    </>
  );
}

export default MainInputBlock;
