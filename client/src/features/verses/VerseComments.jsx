import React from "react";
import { useSelector } from "react-redux";
import { selectVerseById } from "./versesSlice";
import { addVerseComment } from "../comments/commentsSliceThunks";
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

// export default VerseComments;

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
