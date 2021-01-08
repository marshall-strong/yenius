import React from "react";
import { useSelector } from "react-redux";
import { selectCommentById } from "../comments/commentsSlice";
import { selectUserById } from "../users/usersSlice";
import TimeAgo from "./TimeAgo";

const Comment = ({ commentId }) => {
  const comment = useSelector((state) => selectCommentById(state, commentId));
  const user = useSelector((state) => selectUserById(state, comment.authorId));
  if (!comment || !user) {
    return null;
  }
  return (
    <article className="Comment" key={comment.id}>
      <div className="userBadgeAndTimestamp">
        <div className="userBadge">{user.username}</div>
        <TimeAgo timestamp={comment.createdAt} />
      </div>
      <div className="standard-rich-content">{comment.body}</div>
    </article>
  );
};

const CommentsList = ({ commentIds }) => {
  const content = commentIds.map((commentId) => (
    <Comment key={commentId} commentId={commentId} />
  ));
  return <div className="CommentsList">{content}</div>;
};

export default CommentsList;
