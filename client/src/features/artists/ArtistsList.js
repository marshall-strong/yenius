import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchArtistsList } from "./artistsAsyncThunks";
import {
  selectArtistIds,
  selectArtistById,
} from "./artistsSlice";

const ArtistIndexImage = ({ imgUrl }) => {
  const style = {
    backgroundImage: `url(${imgUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return <div className="ArtistIndexImage" style={style} />;
};

const ArtistsListItem = ({ artistId }) => {
  const artist = useSelector((state) => selectArtistById(state, artistId));
  return (
    <article className="list-item" key={artist.id}>
      <ArtistIndexImage key={artist.id} imgUrl={artist.imgUrl} />
      <span></span>
      <h3>Artist {artist.id}</h3>
      <p>id: {artist.id}</p>
      <p>title: {artist.title}</p>
      <p>name: {artist.name}</p>
      <p>imgUrl: {artist.imgUrl}</p>
      <Link to={`/artists/${artist.id}`} className="button muted-button">
        View Artist
      </Link>
    </article>
  );
};

const ArtistsList = () => {
  const dispatch = useDispatch();
  const [componentStatus, setComponentStatus] = useState("idle");

  useEffect(() => {
    if (componentStatus === "idle") {
      dispatch(fetchArtistsList());
      setComponentStatus("requestSent");
    }
  }, [componentStatus, dispatch]);

  const asyncRequestStatus = useSelector((state) => state.asyncRequests.status);
  const error = useSelector((state) => state.asyncRequests.errors[-1]);
  const orderedArtistIds = useSelector(selectArtistIds);
  let content;

  if (asyncRequestStatus === "pending") {
    content = <div className="loader">Loading...</div>;
  } else if (asyncRequestStatus === "rejected") {
    content = <div>{error}</div>;
  } else if (asyncRequestStatus === "fulfilled") {
    content = orderedArtistIds.map((artistId) => (
      <ArtistsListItem key={artistId} artistId={artistId} />
    ));
  }

  return (
    <section className="list-list">
      <h2>Artists</h2>
      {content}
    </section>
  );
};

export default ArtistsList;
