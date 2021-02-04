import React from "react";

import Charts from "../Charts";
import Community from "../Community";
import TopNews from "../TopNews";

import "../../stylesheets/HomeContainer.scss";

const HomeContainer = () => {
  return (
    <div className="HomeContainer">
      <TopNews />
      <br />
      <br />
      <Charts />
      <br />
      <br />
      <Community />
    </div>
  );
};

export default HomeContainer;
