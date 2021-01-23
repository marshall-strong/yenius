import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchTopSongs } from "./songsAsyncThunks";

import { selectTopSongs } from "./songsSlice";

import NotFound from "../../NotFound";

const TableRow = (song) => (
  <tr>
    <th>
      <Link to={`/songs/${song.id}`}>{song.name}</Link>
    </th>
  </tr>
);

const Table = () => {
  const songs = useSelector((state) => selectTopSongs(state));
  const table = <table>{songs.map((song) => TableRow(song))}</table>;
  return <div className="Table">{table}</div>;
};

const TopSongs = () => {
  const [requestSent, setRequestSent] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!requestSent) {
      dispatch(fetchTopSongs());
      setRequestSent(true);
    }
  }, [requestSent, dispatch]);

  const fetchTopSongsStatus = useSelector(
    (state) => state.songs.status.fetchTopSongs
  );

  let content;
  if (!fetchTopSongsStatus || fetchTopSongsStatus === "pending") {
    content = <div className="loader" />;
  } else if (fetchTopSongsStatus === "fulfilled") {
    content = <Table />;
  } else if (fetchTopSongsStatus === "rejected") {
    content = (
      <div>
        fetchTopSongs was rejected!
        <br />
        <NotFound />
      </div>
    );
  } else {
    content = <div>Something unexpected happened in TopSongs...</div>;
  }

  return (
    <div className="TopSongs">
      <h1>TopSongs</h1>
      <br />
      {content}
    </div>
  );
};

export default TopSongs;
