import React from "react";

import Charts from "./Charts";
import Community from "./Community";
import TopNews from "./TopNews";
import TopScholars from "../features/users/TopScholars";

import ".././stylesheets/HomeLayout.scss";

const HomeLayout = () => {
  return (
    <div className="HomeLayout">
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

export default HomeLayout;
