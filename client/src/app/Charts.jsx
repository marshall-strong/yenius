import React, { useEffect, useState } from "react";

import TopAlbums from "../features/albums/TopAlbums";
import TopArtists from "../features/artists/TopArtists";
import TopSongs from "../features/songs/TopSongs";

import ".././stylesheets/TopCharts.scss";

const TopChartsTitle = () => (
  <div className="PageGriddesktop-a6v82w-0 SectionTitle__Container-sc-10idewm-0 SectionTitle__Container">
    <h2 className="PageGridFull-idpot7-0 SectionTitle__Title-sc-10idewm-1 SectionTitle__Title">
      Charts
    </h2>
    <div className="PageGridCenter-q0ues6-0 SectionTitle__Subtitle-sc-10idewm-2 SectionTitle__Subtitle">
      <h3
        color="accent.main"
        fontWeight="normal"
        className="TextLabel__TopChartsTitle"
      >
        Trending on Yenius
      </h3>
    </div>
  </div>
);

const TopChartsItems = ({ chartType }) => {
  let chartsItems;
  if (chartType === "albums") {
    chartsItems = <TopAlbums />;
  } else if (chartType === "artists") {
    chartsItems = <TopArtists />;
  } else if (chartType === "songs") {
    chartsItems = <TopSongs />;
  } else {
    chartsItems = <div>Something unexpected happened in TopCharts...</div>;
  }
  return chartsItems;
};

const Dropdown = ({ setContainerState }) => {
  const [display, setDisplay] = useState("Choose your weapon!!");
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setShowMenu(true);
  };

  const closeMenu = (e) => {
    e.preventDefault();
    setShowMenu(false);
    document.removeEventListener("click", closeMenu);
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("click", closeMenu);
    }
  }, [showMenu]);

  const handleAlbums = (e) => {
    e.preventDefault();
    setDisplay("album!!");
    setContainerState("albums");
    closeMenu(e);
  };
  const handleArtists = (e) => {
    e.preventDefault();
    setDisplay("artists!!");
    setContainerState("artists");
    closeMenu(e);
  };
  const handleSongs = (e) => {
    e.preventDefault();
    setDisplay("songs!!");
    setContainerState("songs");
    closeMenu(e);
  };

  const menu = showMenu ? (
    <div className="menu">
      <button onClick={handleAlbums}>{"pick albums"}</button>
      <button onClick={handleArtists}>{"pick artists"}</button>
      <button onClick={handleSongs}>{"pick songs"}</button>
    </div>
  ) : (
    <div className="menu">{"!!!"}</div>
  );

  return (
    <div className="menu">
      <h2>Dropdown</h2>
      <button onClick={openMenu}>{"FIGHT"}</button> {display}
      {menu}
    </div>
  );
};

const Charts = () => {
  const [chartType, setChartType] = useState("songs");
  return (
    <div>
      <TopChartsTitle />
      <h3>Chart Type: {chartType}</h3>
      <br />
      <Dropdown setContainerState={setChartType} />
      <TopChartsItems chartType={chartType} />
    </div>
  );
};

export default Charts;
