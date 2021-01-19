import React from "react";
// import { useSelector } from "react-redux";
import Lyrics from "./Lyrics";
import SongComments from "./SongComments";

const ColumnPrimary = ({ songId }) => {
  // const isFulfilled = (request) => request === "fulfilled";

  // const fetchSongLyricsStatus = useSelector(
  //   (state) => state.songs.status.fetchSongLyrics
  // );
  // const lyricsRequests = [fetchSongLyricsStatus];
  // const lyrics = lyricsRequests.every(isFulfilled) ? (
  //   <Lyrics songId={songId} />
  // ) : (
  //   <div className="loader" />
  // );

  // const fetchSongCommentsStatus = useSelector(
  //   (state) => state.comments.status.fetchSongComments
  // );
  // const songCommentsRequests = [fetchSongCommentsStatus];
  // const songComments = songCommentsRequests.every(isFulfilled) ? (
  //   <SongComments songId={songId} />
  // ) : (
  //   <div className="loader" />
  // );

  return (
    <div className="column_layout-column_span column_layout-column_span--primary">
      {/* {lyrics} */}
      <Lyrics songId={songId} />
      {/* {songComments} */}
      <SongComments songId={songId} />
    </div>
  );
};

export default ColumnPrimary;
