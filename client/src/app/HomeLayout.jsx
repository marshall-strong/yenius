import React from "react";
import TopNews from "./TopNews";
import TopScholars from "../features/users/TopScholars";
import TopSongs from "../features/songs/TopSongs";
import "../assets/stylesheets/HomeLayout.scss";

const HomeLayout = () => {
  return (
    <div className="HomeLayout">
      <TopNews />
      <br />
      <TopScholars />
      <br />
      <TopSongs />
    </div>
  );
};

export default HomeLayout;
