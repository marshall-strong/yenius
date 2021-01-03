import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchSongsList } from "./songsAsyncThunks";
import { selectSongIds, selectSongById } from "./songsSlice";

const SongsListItem = ({ songId }) => {
  const song = useSelector((state) => selectSongById(state, songId));
  return (
    <article className="list-item" key={song.id}>
      <h3>Song {song.id}</h3>
      <p>id: {song.id}</p>
      <p>title: {song.title}</p>
      <p>name: {song.name}</p>
      <p>trackNumber: {song.trackNumber}</p>
      <p>albumId: {song.albumId}</p>
      <Link to={`/songs/${song.id}`} className="button muted-button">
        View Song
      </Link>
    </article>
  );
};

const SongsList = () => {
  const dispatch = useDispatch();
  const [componentStatus, setComponentStatus] = useState("idle");

  useEffect(() => {
    if (componentStatus === "idle") {
      dispatch(fetchSongsList());
      setComponentStatus("requestSent");
    }
  }, [componentStatus, dispatch]);

  const asyncRequestStatus = useSelector((state) => state.asyncRequests.status);
  const error = useSelector((state) => state.asyncRequests.errors[-1]);
  const orderedSongIds = useSelector(selectSongIds);
  let content;

  if (asyncRequestStatus === "pending") {
    content = <div className="loader">Loading...</div>;
  } else if (asyncRequestStatus === "rejected") {
    content = <div>{error}</div>;
  } else if (asyncRequestStatus === "fulfilled") {
    content = orderedSongIds.map((songId) => (
      <SongsListItem key={songId} songId={songId} />
    ));
  }

  return (
    <section className="list-list">
      <h2>Songs</h2>
      {content}
    </section>
  );
};

export default SongsList;
