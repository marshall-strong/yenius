import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectArtistById } from "./artistsSlice";

import "../../stylesheets/Description.scss";

const Description = ({ artistId }) => {
  const artist = useSelector((state) => selectArtistById(state, artistId));

  if (!artist || !artist.bio) {
    return null;
  }

  if (artist.bio.length < 700) {
    return (
      <div className="Description">
        <h3>{`About “${artist.name}”`}</h3>
        <div className="bio">
          <span dangerouslySetInnerHTML={{ __html: artist.bio }} />
        </div>
      </div>
    );
  }

  const [isExpanded, setExpanded] = useState(false);
  const bio = isExpanded ? artist.bio : artist.bio.slice(0, 658);
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
      <h3>{`About “${artist.name}”`}</h3>
      <div className="bio">
        <span dangerouslySetInnerHTML={{ __html: bio }} />
        {showMore}
      </div>
    </div>
  );
};

const Loader = ({ artistId }) => {
  const fetchArtistPage = useSelector(
    (state) => state.artists.status.fetchArtistPage
  );
  const asyncRequests = [fetchArtistPage];
  if (asyncRequests.every((status) => status === "fulfilled")) {
    return <Description artistId={artistId} />;
  } else {
    return <div className="loader" />;
  }
};

export default Loader;
