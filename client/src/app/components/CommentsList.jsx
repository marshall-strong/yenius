import React from "react";
import { useSelector } from "react-redux";

import { selectCommentIdsByCommentable } from "../../features/comments/commentsSlice";

import Comment from "./Comment";

const CommentsList = ({ commentableId, commentableType }) => {
  const commentableIds = useSelector((state) =>
    selectCommentIdsByCommentable(state, commentableId, commentableType)
  );
  const content = commentableIds.map((commentId) => (
    <Comment key={commentId} commentId={commentId} />
  ));
  return <div className="CommentsList">{content}</div>;
};

export default CommentsList;
