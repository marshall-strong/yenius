import React from "react";
import { Link } from "react-router-dom";

import {} from "./IconicFont";

import "../stylesheets/NotFound.scss";

const NotFound = ({ message }) => {
  const displayMessage = message || "404: Not Found";
  return (
    <div className="NotFound">
      <h1>{displayMessage}</h1>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default NotFound;
