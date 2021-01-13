import React from "react";
import { useSelector } from "react-redux";
import { selectVerseById } from "./versesSlice";
import { addVerseComment } from "../comments/commentsAsyncThunks";
import CommentsContainer from "../comments/CommentsContainer";

const VerseComments = ({ verseId }) => {
  const verse = useSelector((state) => selectVerseById(state, verseId));

  if (!verse || !verse.comments) {
    return null;
  } else {
    return (
      <CommentsContainer
        addComment={addVerseComment}
        commentableId={verseId}
        commentableType={"Verse"}
      />
    );
  }
};

export default VerseComments;
