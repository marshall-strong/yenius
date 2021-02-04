import React from "react";
import { useSelector } from "react-redux";

import { addSongComment } from "../../features/comments/commentsSliceThunks";

import { selectSongById } from "../../features/songs/songsSlice";

import CommentsContainer from "../../features/comments/CommentsContainer";

const SongComments = ({ songId }) => {
  const song = useSelector((state) => selectSongById(state, songId));
  const content =
    !song || !song.comments ? null : (
      <CommentsContainer
        addComment={addSongComment}
        commentableId={songId}
        commentableType={"Song"}
      />
    );
  return content;
};

const Loader = ({ songId }) => {
  const fetchSongComments = useSelector(
    (state) => state.comments.status.fetchSongComments
  );
  const asyncRequests = [fetchSongComments];
  if (asyncRequests.every((status) => status === "fulfilled")) {
    return <SongComments songId={songId} />;
  } else {
    return <div className="loader" />;
  }
};

export default Loader;
