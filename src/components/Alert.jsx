import React from "react";

const Alert = ({ error }) => {
  return error === "" ? null : (
    <div
      className={`alert ${error ? error.status : error.status}`}
      role="alert"
    >
      {error ? error.message : error.message}
    </div>
  );
};

export default Alert;
