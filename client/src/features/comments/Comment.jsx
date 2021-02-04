import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteComment } from "../comments/commentsSliceThunks";

import { selectCommentById } from "../comments/commentsSlice";
import { selectUserById } from "../users/usersSlice";

import EditCommentForm from "./EditCommentForm";
import UserBadgeAndTimestamp from "./UserBadgeAndTimestamp";

// https://iconmonstr.com/edit-5-svg/
const svgEdit = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M8.424 12.282l4.402 4.399-5.826 1.319 1.424-5.718zm15.576-6.748l-9.689 9.804-4.536-4.536 9.689-9.802 4.536 4.534zm-6 8.916v6.55h-16v-12h6.743l1.978-2h-10.721v16h20v-10.573l-2 2.023z" />
  </svg>
);

// https://iconmonstr.com/trash-can-23-svg/
const svgTrashCan = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M3 6v18h18v-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.731 2 1.631 2h5.712z" />
  </svg>
);

const svgThumbDown = (
  <svg
    className="inline_icon inline_icon--reading_size inline_icon--up_1"
    src="thumbs_down.svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 21.62 21.36"
  >
    <path d="M8 21.36a2.12 2.12 0 0 1-1.06-.29c-2.5-1.42-1-5-.16-6.95.11-.27.25-.6.31-.77a.78.78 0 0 0-.6-.36H2.37A2.29 2.29 0 0 1 0 10.64c0-.82 1.59-5.4 2.92-9.09A2.39 2.39 0 0 1 5.1.07h10.56v12.79l-.84.13A3.45 3.45 0 0 0 13 14.08a13.16 13.16 0 0 0-.82 1.85c-1.06 2.69-2 4.79-3.49 5.31a2.06 2.06 0 0 1-.69.12zM5.1 2.07a.48.48 0 0 0-.31.17C3.48 5.89 2.07 10.06 2 10.68c0 .22.1.32.37.32h4.1a2.61 2.61 0 0 1 2.61 2.4 4.29 4.29 0 0 1-.48 1.51c-.46 1.09-1.65 3.89-.7 4.42.52 0 1.3-1.4 2.38-4.14a10 10 0 0 1 1.13-2.38 5.27 5.27 0 0 1 2.25-1.56V2.07zM16.76 0h4.86v12.96h-4.86z"></path>
  </svg>
);

const svgThumbUp = (
  <svg
    className="inline_icon inline_icon--reading_size inline_icon--up_1"
    src="thumbs_up.svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 21.62 21.36"
  >
    <path d="M16.52 21.29H6V8.5l.84-.13a3.45 3.45 0 0 0 1.82-1.09 13.16 13.16 0 0 0 .82-1.85c1.06-2.69 2-4.78 3.52-5.31a2.06 2.06 0 0 1 1.74.17c2.5 1.42 1 5 .16 6.95-.11.27-.25.6-.31.77a.78.78 0 0 0 .6.36h4.1a2.29 2.29 0 0 1 2.37 2.37c0 .82-1.59 5.4-2.92 9.09a2.39 2.39 0 0 1-2.22 1.46zm-8.52-2h8.56a.48.48 0 0 0 .31-.17c1.31-3.65 2.73-7.82 2.79-8.44 0-.22-.1-.32-.37-.32h-4.1A2.61 2.61 0 0 1 12.54 8 4.29 4.29 0 0 1 13 6.46c.45-1.06 1.64-3.89.7-4.43-.52 0-1.3 1.4-2.38 4.14a10 10 0 0 1-1.13 2.38A5.28 5.28 0 0 1 8 10.11zM0 8.4h4.86v12.96H0z"></path>
  </svg>
);

const voting = (
  <voting
    vote-total-clicked="toggle_voters()"
    type="comment"
    object="comment"
    on-unauthorized="ctrl.prompt_auth = true"
    variants="{'hide_upvote_text': true}"
  >
    <div className="voting">
      <div className="voting-button voting-upvote square_button square_button--transparent square_button--depress_on_click">
        {svgThumbUp}
      </div>
      <div> +6 </div>
      <div className="voting-button voting-downvote square_button square_button--transparent square_button--depress_on_click">
        {svgThumbDown}
      </div>
    </div>
  </voting>
);

const Comment = ({ commentId }) => {
  const comment = useSelector((state) => selectCommentById(state, commentId));
  const currentUser = useSelector((state) => state.session.currentUser);
  const user = useSelector((state) => selectUserById(state, comment.authorId));
  const isAuthor = currentUser && comment.authorId === currentUser.id;

  const [showEditForm, setShowEditForm] = useState(false);
  const editForm = showEditForm ? (
    <EditCommentForm comment={comment} setShowEditForm={setShowEditForm} />
  ) : null;

  if (!comment || !user) {
    return null;
  }

  const dispatch = useDispatch();

  const handleUpvote = (e) => {
    e.preventDefault();
  };
  const upvoteButton = (
    <span
      className="iconmonstr"
      onClick={handleUpvote}
      style={{ fill: "#9A9A9A" }}
    >
      {svgThumbUp}
    </span>
  );

  const handleDownvote = (e) => {
    e.preventDefault();
  };
  const downvoteButton = (
    <span
      className="iconmonstr"
      onClick={handleDownvote}
      style={{ fill: "#9A9A9A" }}
    >
      {svgThumbDown}
    </span>
  );

  const handleEditComment = (e) => {
    e.preventDefault();
    setShowEditForm(true);
  };
  const editButton = isAuthor ? (
    <span
      className="iconmonstr"
      onClick={handleEditComment}
      style={{ fill: "#9A9A9A" }}
    >
      {svgEdit}
    </span>
  ) : null;

  const handleDeleteComment = (e) => {
    e.preventDefault();
    dispatch(deleteComment(commentId));
  };
  const deleteButton = isAuthor ? (
    <span
      className="iconmonstr"
      onClick={handleDeleteComment}
      style={{ fill: "#9A9A9A" }}
    >
      {svgTrashCan}
    </span>
  ) : null;

  return (
    <article className="Comment" key={comment.id}>
      <UserBadgeAndTimestamp userId={user.id} createdAt={comment.createdAt} />
      <div className="standard-rich-content">{comment.body}</div>
      {editButton}
      {deleteButton}
      {editForm}
    </article>
  );
};

export default Comment;
