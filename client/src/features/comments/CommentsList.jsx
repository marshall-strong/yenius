import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteComment } from "../comments/commentsAsyncThunks";

import {
  selectCommentById,
  selectCommentIdsByCommentable,
} from "../comments/commentsSlice";
import { selectUserById } from "../users/usersSlice";

import EditCommentForm from "./EditCommentForm";
import TimeAgo from "./TimeAgo";

const Comment = ({ commentId }) => {
  const comment = useSelector((state) => selectCommentById(state, commentId));
  const user = useSelector((state) => selectUserById(state, comment.authorId));
  const currentUser = useSelector((state) => state.session.currentUser);

  const [showEditForm, setShowEditForm] = useState(false);
  const editForm = showEditForm ? (
    <EditCommentForm comment={comment} setShowEditForm={setShowEditForm} />
  ) : null;

  if (!comment || !user) {
    return null;
  }

  const dispatch = useDispatch();
  const handleDeleteComment = (e) => {
    e.preventDefault();
    dispatch(deleteComment(commentId));
  };
  const handleEditComment = (e) => {
    e.preventDefault();
    setShowEditForm(true);
  };

  let deleteButton;
  let editButton;
  if (currentUser && comment.authorId === currentUser.id) {
    deleteButton = (
      <button className="deleteCommentButton" onClick={handleDeleteComment}>
        delete
      </button>
    );
    editButton = (
      <button className="editCommentButton" onClick={handleEditComment}>
        edit
      </button>
    );
  }

  return (
    <article className="Comment" key={comment.id}>
      <div className="userBadgeAndTimestamp">
        <div className="userBadge">{user.username}</div>
        <TimeAgo timestamp={comment.createdAt} />
      </div>
      <div className="standard-rich-content">{comment.body}</div>
      {deleteButton}
      {editButton}
      {editForm}
    </article>
  );
};

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
