import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectArtistIds, selectArtistById } from "./artistsSlice";

const IndexListItem = ({ artistId }) => {
  const artist = useSelector((state) => selectArtistById(state, artistId));
  return (
    <li>
      <Link
        to={`/artists/${artistId}`}
        className="artists_index_list-artist_name"
      >
        {artist.name}
      </Link>
    </li>
  );
};

const IndexList = ({ char }) => {
  const artistIds = useSelector((state) => selectArtistIds(state));
  if (artistIds.length === 0) {
    return (
      <h1 className="artists_index-header">
        No {char.toUpperCase()} Artists found
      </h1>
    );
  }
  const list = artistIds.map((artistId) => (
    <IndexListItem key={artistId} artistId={artistId} />
  ));
  return (
    <div>
      <h1 className="artists_index-header">
        All {char.toUpperCase()} Artists on Yenius
      </h1>
      <ul className="artists_index_list">{list}</ul>
    </div>
  );
};

export default IndexList;
