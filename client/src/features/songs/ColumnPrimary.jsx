import React from "react";
import { useSelector } from "react-redux";
import Lyrics from "./Lyrics";
import SongComments from "./SongComments";

const ColumnPrimary = ({ songId }) => {
  const fetchSongLyrics = useSelector(
    (state) => state.songs.status.fetchSongLyrics
  );
  const fetchSongComments = useSelector(
    (state) => state.comments.status.fetchSongComments
  );
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
