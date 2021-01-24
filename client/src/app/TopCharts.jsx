import React, { useEffect, useState } from "react";

import TopAlbums from "../features/albums/TopAlbums";
import TopArtists from "../features/artists/TopArtists";
import TopSongs from "../features/songs/TopSongs";

import "../assets/stylesheets/TopCharts.scss";

const Dropdown = ({ setChart }) => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setShowMenu(true);
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("click", closeMenu);
    }
  }, [showMenu]);

  const closeMenu = (e) => {
    e.preventDefault();
    setShowMenu(false);
    document.removeEventListener("click", closeMenu);
  };

  const handleAlbums = (e) => {
    e.preventDefault();
    setChart("albums");
    closeMenu(e);
  };

  const handleArtists = (e) => {
    e.preventDefault();
    setChart("artists");
    closeMenu(e);
  };

  const handleSongs = (e) => {
    e.preventDefault();
    setChart("songs");
    closeMenu(e);
  };

  const menu = showMenu ? (
    <div className="menu">
      <button onClick={handleAlbums}>{"albums"}</button>
      <button onClick={handleArtists}>{"artists"}</button>
      <button onClick={handleSongs}>{"songs"}</button>
    </div>
  ) : (
    <div className="menu"></div>
  );

  return (
    <div className="menu">
      <button onClick={openMenu}>{"change chart"}</button>
      {menu}
    </div>
  );
};

const TopCharts = () => {
  const [chart, setChart] = useState("songs");

  let content;
  if (chart === "albums") {
    content = <TopAlbums />;
  } else if (chart === "artists") {
    content = <TopArtists />;
  } else if (chart === "songs") {
    content = <TopSongs />;
  } else {
    content = <div>Something unexpected happened in TopCharts...</div>;
  }

  return (
    <div className="TopCharts">
      {`Chart: ${chart}`}
      <Dropdown setChart={setChart} />
      {content}
    </div>
  );
};

export default TopCharts;
