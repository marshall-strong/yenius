import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectSongIds, selectSongById } from "./songsSlice";

const SongsListItem = ({ songId }) => {
  const song = useSelector((state) => selectSongById(state, songId));
  return (
    <li>
      <Link to={`/songs/${songId}`} className="songs_index_list-song_name">
        {song.name} by {song.artist}
      </Link>
    </li>
  );
};

const SongsList = ({ char }) => {
  const songIds = useSelector((state) => selectSongIds(state));
  if (songIds.length === 0) {
    return (
      <h1 className="songs_index-header">
        No {char.toUpperCase()} Songs found
      </h1>
    );
  }
  const list = songIds.map((songId) => (
    <SongsListItem key={songId} songId={songId} />
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

export default SongsList;
