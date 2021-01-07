import React from "react";
import { useSelector } from "react-redux";
import { selectSongById } from "../songsSlice";
import { addSongComment } from "../../comments/commentsAsyncThunks";
import CommentsContainer from "../../comments/CommentsContainer";

const SongComments = ({ songId }) => {
  const song = useSelector((state) => selectSongById(state, songId));
  if (!song || !song.comments) {
    return null;
  } else {
    return (
      <CommentsContainer
        addComment={addSongComment}
        commentable={song}
        commentableId={songId}
        commentableType={"Song"}
      />
    );
  }
};

export default SongComments;
