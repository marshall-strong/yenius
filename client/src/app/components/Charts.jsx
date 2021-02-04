import React, { useEffect, useState } from "react";

import TopAlbums from "../../features/albums/AlbumsTop";
import TopArtists from "../../features/artists/ArtistsTop";
import TopSongs from "../../features/songs/SongsTop";

// import "../../stylesheets/Charts.scss";

const svgChevron = (
  <svg viewBox="0 0 21.32 10.91">
    <path d="M10.66 10.91L0 1.5 1.32 0l9.34 8.24L20 0l1.32 1.5-10.66 9.41"></path>
  </svg>
);

const svgCheckmark = (
  <svg viewBox="0 0 22 16.2">
    <path d="M8.83 16.2L0 7.97l2.06-2.21 6.62 6.17L19.79 0 22 2.06 8.83 16.2"></path>
  </svg>
);

const TopChartsTitle = () => (
  <div className="SectionTitle__Container">
    <h2 className="SectionTitle__Title">Charts</h2>
    <div className="SectionTitle__Subtitle">
      <h3 className="TextLabel__TopChartsTitle">Trending on Yenius</h3>
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
    ? "SquareManySelects__Container isOpen isOpenDropdown-Charts"
    : "SquareManySelects__Container isClosed isClosedDropdown-Charts";

  const dropdownExpandedContent = showDropdown ? (
    <div className="DropdownExpansionContainer">
      <div className="DropdownOptionsContainer">
        <div className="SquareManySelects__Option">
          <div className="SquareSelectOption__Container">
            <div onClick={handleAlbums}>
              {"albums".toUpperCase()}
              {/* {icon} */}
            </div>
          </div>
        </div>

        <div className="SquareManySelects__Option">
          <div className="SquareSelectOption__Container">
            <div onClick={handleArtists}>
              {"artists".toUpperCase()}
              {/* {icon} */}
            </div>
          </div>
        </div>

        <div className="SquareManySelects__Option">
          <div className="SquareSelectOption__Container">
            <div onClick={handleSongs}>
              {"songs".toUpperCase()}
              {/* {icon} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="DropdownExpansionContainer">
      <div className="DropdownOptionsContainer"></div>
    </div>
  );

  return (
    <div className="Dropdown">
      <div className="SquareManySelects__Wrapper" onClick={openDropdown}>
        <div className={dropdownContainerStyle}>
          <div className="SquareSelectTitle__Container">
            {display}
            <div className={arrowStyle}>{svgChevron}</div>
          </div>
        </div>
      </div>
      {dropdownExpandedContent}
    </div>
  );
};

const Charts = () => {
  const [chartType, setChartType] = useState("songs");
  return (
    <div className="Charts">
      <TopChartsTitle />
      <Dropdown setContainerState={setChartType} />
      <br />
      <TopChartsItems chartType={chartType} />
    </div>
  );
};

export default Charts;
