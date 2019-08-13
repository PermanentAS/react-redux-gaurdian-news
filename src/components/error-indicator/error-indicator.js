import React from "react";
import "./error-indicator.css";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator mt-5">
      <i className="far fa-newspaper icon" />
      <span className="error-title">THE GUARDIAN ERROR</span>
      <span className="error-text">Pease reload this page</span>
    </div>
  );
};

export default ErrorIndicator;
