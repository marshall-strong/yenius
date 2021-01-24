import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTopSongs } from "./songsAsyncThunks";

import { selectTopSongs } from "./songsSlice";

import NotFound from "../../NotFound";
import TopSongsRow from "./TopSongsRow";

const TopSongsContent = () => {
  const songs = useSelector((state) => selectTopSongs(state));
  const rows = songs.map((song) => <TopSongsRow song={song} key={song.id} />);
  return <div>{rows}</div>;
};

const TopSongsContainer = () => {
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
    content = <TopSongsContent />;
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

export default TopSongsContainer;
