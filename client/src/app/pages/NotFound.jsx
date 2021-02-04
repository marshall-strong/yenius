import React from "react";
import { Link } from "react-router-dom";

import { home, warning } from "../iconmonstr";

import "../../stylesheets/NotFound.scss";

const svgHome = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
  >
    <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
  </svg>
);

const svgWarning = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="240"
    height="240"
    viewBox="0 0 24 24"
  >
    <path d="M12 1l-12 22h24l-12-22zm-1 8h2v7h-2v-7zm1 11.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
  </svg>
);

const NotFound = ({ message, redirectURL, redirectName }) => {
  const displayMessage = message || "404: Not Found";
  const linkURL = redirectURL || "/";
  const linkName = redirectName || "homepage";
  return (
    <div className="NotFound">
      <br />
      <br />
      {svgWarning}
      <h1>{displayMessage}</h1>
      <br />
      <br />
      <br />
      <br />
      <Link to={linkURL}>{svgHome}</Link>
      <Link to={linkURL}>
        <h2>{`return to ${linkName}`}</h2>
      </Link>
    </div>
  );
};

export default NotFound;
