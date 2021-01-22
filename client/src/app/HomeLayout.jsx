import React from "react";
import TopNews from "./TopNews";
import TopScholars from "../features/users/TopScholars";
import "../assets/stylesheets/HomeLayout.scss";

const HomeLayout = () => {
  return (
    <div className="HomeLayout">
      <TopNews />
      <br />
      <TopScholars />
    </div>
  );
};

export default HomeLayout;
