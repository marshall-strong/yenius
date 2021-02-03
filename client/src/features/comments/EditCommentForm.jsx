import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

import { editComment } from "./commentsSliceThunks";

import { squareStop } from "../../app/iconmonstr";

const EditCommentForm = ({ comment, setShowEditForm }) => {
  const currentUser = useSelector((state) => state.session.currentUser);
  const authorId = currentUser ? currentUser.id : null;

  const [body, setBody] = useState(comment.body);
  const onBodyChanged = (e) => setBody(e.target.value);

  const [editRequestStatus, setEditRequestStatus] = useState("idle");

  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () =>
    expanded ? setExpanded(false) : setExpanded(true);

  const dispatch = useDispatch();

  const canSave =
    [authorId, body].every(Boolean) && editRequestStatus === "idle";

  const handleSubmit = async () => {
    if (canSave) {
      try {
        setEditRequestStatus("pending");
        const response = await dispatch(
          editComment({
            id: comment.id,
            commenting_user_id: authorId,
            commentable_type: comment.commentable_type,
            commentable_id: comment.commentable_id,
            body: body,
          })
        );
        unwrapResult(response);
        setBody("");
        setShowEditForm(false);
      } catch (error) {
        console.error("Failed to save the updated comment: ", error);
      } finally {
        setEditRequestStatus("idle");
      }
    }
  };

  return (
    <section className="CommentForm">
      <form>
        <div className="avatarBoxWithInputBox">
          <div className="iconmonstr" style={{ fill: currentUser.myColor }}>
            {squareStop}
            {` .`}
          </div>
          <div className="inputBox">
            <textarea
              id="commentBody"
              name="commentBody"
              value={body}
              onChange={onBodyChanged}
              placeholder="edit your comment"
              onClick={toggleExpanded}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!canSave}
          className="submitButton"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default EditCommentForm;
