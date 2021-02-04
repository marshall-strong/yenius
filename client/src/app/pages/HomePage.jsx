import React from "react";

import Charts from "../components/Charts";
import Community from "../components/Community";
import TopNews from "../components/News";

// import "../../stylesheets/HomeContainer.scss";

const HomePage = () => {
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

export default HomePage;
