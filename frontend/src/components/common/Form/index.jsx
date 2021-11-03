import React, { useState } from "react";

const urlRX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  
  function isValidUrl(url) {
    return !url.match(urlRX);
  }

function InputForm({ setInputUrl, loading }) {
  const [inputData, setInputData] = useState("");
  const [isValidData, setValidation] = useState(true);

  return (
    <div className="row">
      <div className="col-xl-12">
        <form className="form">
          <div className="form-group">
            <input
              id="validation-01"
              type="text"
              className={`form-control ${
                isValidUrl(inputData) ? "is-invalid" : ""
              }`}
              placeholder="Enter RSS URL"
              defaultValue={inputData}
              onChange={(event) => {
                setValidation(isValidUrl(event.target.value));
                setInputData(event.target.value);
              }}
            />
            <br/>
            { isValidData &&
              <div className="alert alert-danger" role="alert">
                Invalid url
              </div>
            }
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Search"
              disabled={() => isValidData || loading}
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
