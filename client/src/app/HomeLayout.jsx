import React from "react";
import Charts from "./Charts";
// import JaJanKen from "./JaJanKen";
// import DropdownContainer from "./DropdownContainer";
import TopAlbums from "../features/albums/TopAlbums";
import TopArtists from "../features/artists/TopArtists";
// import TopCharts from "./TopCharts";
import TopNews from "./TopNews";
import TopSongs from "../features/songs/TopSongs";
import TopScholars from "../features/users/TopScholars";

import ".././stylesheets/HomeLayout.scss";

const HomeLayout = () => {
  return (
    <div className="HomeLayout">
      <Charts />
      <br />
      {/* <DropdownContainer />
      <br />
      <JaJanKen /> */}
      {/* <br /> */}
      {/* <TopCharts /> */}
      <br />
      <TopNews />
      <br />
      <TopScholars />
      <br />
      <TopAlbums />
      <br />
      <TopArtists />
      <br />
      <TopSongs />
    </div>
  );
};

export default HomeLayout;
