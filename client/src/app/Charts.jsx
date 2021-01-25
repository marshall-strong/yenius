import React, { useEffect, useState } from "react";

import TopAlbums from "../features/albums/TopAlbums";
import TopArtists from "../features/artists/TopArtists";
import TopSongs from "../features/songs/TopSongs";

import ".././stylesheets/TopCharts.scss";
import ".././stylesheets/TopChartsDropdown.scss";

const chevron = (
  <svg viewBox="0 0 21.32 10.91">
    <path d="M10.66 10.91L0 1.5 1.32 0l9.34 8.24L20 0l1.32 1.5-10.66 9.41"></path>
  </svg>
);

const checkmark = (
  <svg viewBox="0 0 22 16.2">
    <path d="M8.83 16.2L0 7.97l2.06-2.21 6.62 6.17L19.79 0 22 2.06 8.83 16.2"></path>
  </svg>
);

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
  const [display, setDisplay] = useState("TOP SONGS");
  const [showDropdown, setShowDropdown] = useState(false);

  const openDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(true);
  };

  const closeDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(false);
    document.removeEventListener("click", closeDropdown);
  };

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener("click", closeDropdown);
    }
  }, [showDropdown]);

  const handleAlbums = (e) => {
    e.preventDefault();
    setDisplay("TOP ALBUMS");
    setContainerState("albums");
    closeDropdown(e);
  };
  const handleArtists = (e) => {
    e.preventDefault();
    setDisplay("TOP ARTISTS");
    setContainerState("artists");
    closeDropdown(e);
  };
  const handleSongs = (e) => {
    e.preventDefault();
    setDisplay("TOP SONGS");
    setContainerState("songs");
    closeDropdown(e);
  };

  //
  const arrowStyle = showDropdown
    ? "SquareSelectTitle__Arrow arrow_up"
    : "SquareSelectTitle__Arrow arrow_down";

  const dropdownContainerStyle = showDropdown
    ? "SquareManySelects__Container isOpen"
    : "SquareManySelects__Container isClosed";

  const dropdownContent = showDropdown ? (
    <div className="SquareManySelects__Selects-sc-1kktot3-4 hvGVqr">
      <div className="SquareManySelects__Select-sc-1kktot3-3 gIwQZZ">
        <div className="SquareManySelects__Option-sc-1kktot3-5 eLlkRP">
          <div className="SquareSelectOption__Container-h4rr3o-0 gMvRPT">
            <div onClick={handleAlbums}>
              {"albums".toUpperCase()}
              {/* {icon} */}
            </div>
          </div>
        </div>

        <div className="SquareManySelects__Option-sc-1kktot3-5 eLlkRP">
          <div className="SquareSelectOption__Container-h4rr3o-0 gMvRPT">
            <div onClick={handleArtists}>
              {"artists".toUpperCase()}
              {/* {icon} */}
            </div>
          </div>
        </div>

        <div className="SquareManySelects__Option-sc-1kktot3-5 eLlkRP">
          <div className="SquareSelectOption__Container-h4rr3o-0 gMvRPT">
            <div onClick={handleSongs}>
              {"songs".toUpperCase()}
              {/* {icon} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="SquareManySelects__Selects-sc-1kktot3-4 hvGVqr">
      <div className="SquareManySelects__Select-sc-1kktot3-3 gIwQZZ"></div>
    </div>
  );
  //
  // const dropdown = showDropdown ? (
  //   <div className="dropdown">
  //     <button onClick={handleAlbums}>{"pick albums"}</button>
  //     <button onClick={handleArtists}>{"pick artists"}</button>
  //     <button onClick={handleSongs}>{"pick songs"}</button>
  //   </div>
  // ) : (
  //   <div className="dropdown">{"!!!"}</div>
  // );

  return (
    <div className="Dropdown">
      <div className="SquareManySelects__Wrapper" onClick={openDropdown}>
        <div className={dropdownContainerStyle}>
          <div className="SquareSelectTitle__Container">
            {display}
            <div className={arrowStyle}>{chevron}</div>
          </div>
        </div>
        {/* <h2>Dropdown</h2>
        <button onClick={openDropdown}>{display}</button> */}
      </div>
      {dropdownContent}
    </div>
  );
};

const Charts = () => {
  const [chartType, setChartType] = useState("songs");
  return (
    <div>
      <TopChartsTitle />
      <Dropdown setContainerState={setChartType} />
      <br />
      <br />
      <TopChartsItems chartType={chartType} />
    </div>
  );
};

export default Charts;
