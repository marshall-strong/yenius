import React from "react";
import "../assets/stylesheets/Breadcrumbs.scss";

const Breadcrumbs = ({ match }) => {
  return (
    <footer className="Breadcrumbs">
      <br />
      <h3>Breadcrumbs Example</h3>
      <br />
      <h2> {"Home > JK > JAY-Z & Kanye West > Watch the Throne"} </h2>
      <br />
    </footer>
  );
};

export default Breadcrumbs;
