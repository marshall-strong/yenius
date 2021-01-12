import React from "react";
import { useSelector } from "react-redux";
import Lyrics from "./Lyrics";
import SongComments from "./SongComments";

const ColumnPrimary = ({ songId }) => {
  const status = useSelector((state) => state.songs.status);
  const { fetchSongComments, fetchSongLyrics } = status;
  const isFulfilled = (request) => request === "fulfilled";

  const lyricsRequests = [fetchSongLyrics];
  const lyrics = lyricsRequests.every(isFulfilled) ? (
    <Lyrics songId={songId} />
  ) : (
    <div className="loader" />
  );

  const songCommentsRequests = [fetchSongComments];
  const songComments = songCommentsRequests.every(isFulfilled) ? (
    <SongComments songId={songId} />
  ) : (
    <div className="loader" />
  );
  return (
    <div className="column_layout-column_span column_layout-column_span--primary">
      {lyrics}
      {songComments}
    </div>
  );
};

export default ColumnPrimary;
