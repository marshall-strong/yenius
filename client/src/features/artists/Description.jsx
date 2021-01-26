import React, { useState } from "react";
import { useSelector } from "react-redux";

import { selectArtistById } from "./artistsSlice";

const Description = ({ artistId }) => {
  const artist = useSelector((state) => selectArtistById(state, artistId));
  if (!artist || !artist.bio) {
    return null;
  }

  let bio;
  const needButton = artist.bio.length > 700;

  const [isExpanded, setExpanded] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setExpanded(true);
  };

  if (needButton) {
    const markupInitial = { __html: artist.bio.slice(0, 655) };
    const markup = { __html: artist.bio };
    bio = isExpanded ? (
      <div className="bio">
        <span dangerouslySetInnerHTML={markup} />
      </div>
    ) : (
      <div className="bio">
        <span dangerouslySetInnerHTML={markupInitial} />
        <button onClick={handleClick}>show full description</button>
      </div>
    );
  } else {
    const markup = { __html: artist.bio };
    bio = (
      <div className="bio">
        <span dangerouslySetInnerHTML={markup} />
      </div>
    );
  }

  return <div className="Description">{bio}</div>;
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
