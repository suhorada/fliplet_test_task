import React from "react";

function InputForm() {
  return (
    <div className="row">
      <div className="col-xl-12">
        <form className="form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter RSS URL"
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Search"
            />
          </div>
        </form>
        <hr />
      </div>
    </div>
  );
}

export default InputForm;
