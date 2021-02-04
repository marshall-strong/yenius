import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchSongsIndex } from "./songsSliceThunks";

import { selectSongIds, selectSongById } from "./songsSlice";

// import ".././stylesheets/SongsIndex.scss";

const ListItem = ({ songId }) => {
  const song = useSelector((state) => selectSongById(state, songId));
  return (
    <li>
      <Link to={`/songs/${songId}`} className="songs_index_list-song_name">
        {song.name} by {song.artist}
      </Link>
    </li>
  );
};

const List = ({ char, songIds }) => {
  if (songIds.length === 0) {
    return (
      <h1 className="songs_index-header">
        No {char.toUpperCase()} Songs found
      </h1>
    );
  }
  const list = songIds.map((songId) => (
    <ListItem key={songId} songId={songId} />
  ));
  return (
    <div>
      <h1 className="songs_index-header">
        All {char.toUpperCase()} Songs on Yenius
      </h1>
      <ul className="songs_index_list">{list}</ul>
    </div>
  );
};

const SongsList = ({ match }) => {
  const dispatch = useDispatch();
  const [componentStatus, setComponentStatus] = useState("idle");
  const { char } = match.params;

  useEffect(() => {
    if (componentStatus === "idle") {
      dispatch(fetchSongsIndex(char));
      setComponentStatus("requestSent");
    }
  }, [componentStatus, char, dispatch]);

  const asyncRequestStatus = useSelector((state) => state.asyncRequests.status);
  const error = useSelector((state) => state.asyncRequests.errors[-1]);

  const orderedSongIds = useSelector(selectSongIds);
  let content;

  if (asyncRequestStatus === "pending") {
    content = <div className="loader">Loading...</div>;
  } else if (asyncRequestStatus === "rejected") {
    content = <div>{error}</div>;
  } else if (asyncRequestStatus === "fulfilled") {
    content = <List char={char} songIds={orderedSongIds} />;
  }

  return <section className="SongsIndex">{content}</section>;
};

export default SongsList;
