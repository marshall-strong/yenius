import React from "react";
import { useSelector } from "react-redux";

import { addVerseComment } from "../../features/comments/commentsSliceThunks";
import { selectVerseById } from "../../features/verses/versesSlice";

import CommentsContainer from "./CommentsContainer";

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

const Loader = ({ verseId }) => {
  const fetchVerseComments = useSelector(
    (state) => state.comments.status.fetchVerseComments
  );
  const asyncRequests = [fetchVerseComments];
  if (asyncRequests.every((status) => status === "fulfilled")) {
    return <VerseComments verseId={verseId} />;
  } else {
    return <div className="loader" />;
  }
};

export default Loader;
