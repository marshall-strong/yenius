import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchArtistsIndex } from "../artistsAsyncThunks";
import { selectArtistIds, selectArtistById } from "../artistsSlice";
import "../../../assets/stylesheets/ArtistsIndex.scss";

const ArtistsListItem = ({ artistId }) => {
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

const ArtistsList = ({ char, artistIds }) => {
  if (artistIds.length === 0) {
    return (
      <h1 className="artists_index-header">
        No {char.toUpperCase()} Artists found
      </h1>
    );
  }
  const list = artistIds.map((artistId) => (
    <ArtistsListItem key={artistId} artistId={artistId} />
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

const ArtistsIndexCharArtists = ({ match }) => {
  const dispatch = useDispatch();
  const [componentStatus, setComponentStatus] = useState("idle");
  const { char } = match.params;

  useEffect(() => {
    if (componentStatus === "idle") {
      dispatch(fetchArtistsIndex(char));
      setComponentStatus("requestSent");
    }
  }, [componentStatus, char, dispatch]);

  const asyncRequestStatus = useSelector((state) => state.asyncRequests.status);
  const error = useSelector((state) => state.asyncRequests.errors[-1]);

  const orderedArtistIds = useSelector(selectArtistIds);
  let content;

  if (asyncRequestStatus === "pending") {
    content = <div className="loader">Loading...</div>;
  } else if (asyncRequestStatus === "rejected") {
    content = <div>{error}</div>;
  } else if (asyncRequestStatus === "fulfilled") {
    content = <ArtistsList char={char} artistIds={orderedArtistIds} />;
  }

  return <section className="ArtistsIndex">{content}</section>;
};

export default ArtistsIndexCharArtists;
