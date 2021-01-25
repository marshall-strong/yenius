import React, { useEffect, useState } from "react";

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

const Container = () => {
  const [containerState, setContainerState] = useState(
    "initial containerState"
  );
  return (
    <div>
      <h2>Container</h2>
      <h3>containerState: {containerState}</h3>
      <br />
      <Dropdown setContainerState={setContainerState} />
    </div>
  );
};

export default Container;
