import React from "react";
import { useSelector } from "react-redux";
import { selectCommentsStatus } from "./commentsSlice";
import CommentsList from "./CommentsList";

const CommentsContainer = ({ commentableId, commentableType }) => {
  const commentsStatus = useSelector((state) => selectCommentsStatus(state));
  return (
    <CommentsList
      commentableId={commentableId}
      commentableType={commentableType}
    />
  );
};

export default CommentsContainer;
