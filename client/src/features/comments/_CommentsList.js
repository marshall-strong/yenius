import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchAllComments } from "./commentsAsyncThunks";
import { selectCommentIds, selectCommentById } from "./commentsSlice";

const CommentsListItem = ({ commentId }) => {
  const comment = useSelector((state) => selectCommentById(state, commentId));
  return (
    <article className="list-item" key={comment.id}>
      <h3>Comment {comment.id}</h3>
      <p>id: {comment.id}</p>
      <p>authorId: {comment.authorId}</p>
      <p>commentableType: {comment.commentableType}</p>
      <p>commentableId: {comment.commentableId}</p>
      <p>body: {comment.body}</p>
      <p>createdAt: {comment.createdAt}</p>
      <p>updatedAt: {comment.updatedAt}</p>
      <Link to={`/comments/${comment.id}`} className="button muted-button">
        View Comment
      </Link>
    </article>
  );
};

const CommentsList = () => {
  const dispatch = useDispatch();
  const commentIds = useSelector(selectCommentIds);
  const commentsStatus = useSelector((state) => state.comments.status);
  const error = useSelector((state) => state.comments.error);

  useEffect(() => {
    if (commentsStatus === "idle") {
      dispatch(fetchAllComments());
    }
  }, [commentsStatus, dispatch]);

  let content;

  if (commentsStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (commentsStatus === "succeeded") {
    content = commentIds.map((commentId) => (
      <CommentsListItem key={commentId} commentId={commentId} />
    ));
  } else if (commentsStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className="list-list">
      <h2>Comments</h2>
      {content}
    </section>
  );
};

export default CommentsList;
