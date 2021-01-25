import React from "react";

import TopAlbums from "../features/albums/TopAlbums";
import TopArtists from "../features/artists/TopArtists";
import TopSongs from "../features/songs/TopSongs";

import Charts from "./Charts";
import TopNews from "./TopNews";
import TopScholars from "../features/users/TopScholars";

import ".././stylesheets/HomeLayout.scss";

const HomeLayout = () => {
  return (
    <div className="HomeLayout">
      <Charts />
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
