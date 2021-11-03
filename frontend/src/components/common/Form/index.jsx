import React, { useState } from "react";

const urlRX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

function isValidUrl(url) {
  if (url.match(urlRX)) return true;
  return false;
}

function InputForm({ setInputUrl }) {
  const [inputData, setInputData] = useState("");
  return (
    <div className="row">
      <div className="col-xl-12">
        <form className="form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter RSS URL"
              defaultValue={inputData}
              onChange={(event) => {
                if (isValidUrl) setInputData(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Search"
              onClick={() => {
                setInputUrl(inputData);
              }}
            />
          </div>
        </form>
        <hr />
      </div>
    </div>
  );
}

export default InputForm;
