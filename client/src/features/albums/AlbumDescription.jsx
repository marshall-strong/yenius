import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectAlbumById } from "./albumsSlice";

// import "../../stylesheets/Description.scss";

const Description = ({ albumId }) => {
  const album = useSelector((state) => selectAlbumById(state, albumId));

  if (!album || !album.bio) {
    return null;
  }

  if (album.bio.length < 700) {
    return (
      <div className="Description">
        <h3>{`About “${album.name}”`}</h3>
        <div className="bio">
          <span dangerouslySetInnerHTML={{ __html: album.bio }} />
        </div>
      </div>
    );
  }

  const [isExpanded, setExpanded] = useState(false);
  const bio = isExpanded ? album.bio : album.bio.slice(0, 658).concat("...");
  const handleShowMore = (e) => {
    e.preventDefault();
    setExpanded(true);
  };
  const handleShowLess = (e) => {
    e.preventDefault();
    setExpanded(false);
  };
  const showMore = isExpanded ? (
    <span className="showMore" onClick={handleShowLess}>
      {"(collapse)"}
    </span>
  ) : (
    <span className="showMore" onClick={handleShowMore}>
      {"read more »"}
    </span>
  );

  return (
    <div className="Description">
      <h3>{`About “${album.name}”`}</h3>
      <div className="bio">
        <span dangerouslySetInnerHTML={{ __html: bio }} />
        {showMore}
      </div>
    </div>
  );
};

const Loader = ({ albumId }) => {
  const fetchAlbumPage = useSelector(
    (state) => state.albums.status.fetchAlbumPage
  );
  const asyncRequests = [fetchAlbumPage];
  if (asyncRequests.every((status) => status === "fulfilled")) {
    return <Description albumId={albumId} />;
  } else {
    return <div className="loader" />;
  }
};

export default Loader;
