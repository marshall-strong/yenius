import React from "react";
import { useSelector } from "react-redux";

import { selectArtistById } from "./artistsSlice";

const Description = ({ artistId }) => {
  const artist = useSelector((state) => selectArtistById(state, artistId));
  const markup = artist ? { __html: artist.bio } : null;
  return (
    <div className="MockComponent">
      <h1>Description</h1>
      <span dangerouslySetInnerHTML={markup} />
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
