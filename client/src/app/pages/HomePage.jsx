import React from "react";

import Charts from "../components/Charts";
import Community from "../components/Community";
import News from "../components/News";

// import "../../stylesheets/HomeContainer.scss";

const HomePage = () => {
  return (
    <div className="HomeContainer">
      <News />
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
