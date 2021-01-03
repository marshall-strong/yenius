import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectCommentById } from "../comments/commentsSlice";

const CommentPage = ({ match }) => {
  const { commentId } = match.params;

  const comment = useSelector((state) => selectCommentById(state, commentId));

  if (!comment) {
    return (
      <section>
        <h2>Comment not found!</h2>
        <Link to={`/comments`} className="button muted-button">
          Back to Comments List
        </Link>
      </section>
    );
  }

  return (
    <section>
      <h2>Comment {comment.id}</h2>
      <p>id: {comment.id}</p>
      <p>authorId: {comment.authorId}</p>
      <p>commentableType: {comment.commentableType}</p>
      <p>commentableId: {comment.commentableId}</p>
      <p>body: {comment.body}</p>
      <p>createdAt: {comment.createdAt}</p>
      <p>updatedAt: {comment.updatedAt}</p>
      <Link to={`/comments`} className="button muted-button">
        Back to Comments List
      </Link>
    </section>
  );
};

export default CommentPage;
