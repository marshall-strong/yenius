import React, { useEffect, useState } from "react";

const JaJanKen = () => {
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

  const handleRock = (e) => {
    e.preventDefault();
    setDisplay("rock!!");
    closeMenu(e);
  };
  const handlePaper = (e) => {
    e.preventDefault();
    setDisplay("paper!!");
    closeMenu(e);
  };
  const handleScissors = (e) => {
    e.preventDefault();
    setDisplay("scissors!!");
    closeMenu(e);
  };

  const menu = showMenu ? (
    <div className="menu">
      <button onClick={handleRock}>{"pick rock"}</button>
      <button onClick={handlePaper}>{"pick paper"}</button>
      <button onClick={handleScissors}>{"pick scissors"}</button>
    </div>
  ) : (
    <div className="menu">{"!!!"}</div>
  );

  return (
    <div className="menu">
      <button onClick={openMenu}>{"FIGHT"}</button> {display}
      {menu}
    </div>
  );
};

export default JaJanKen;
