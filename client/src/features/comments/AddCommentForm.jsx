import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

import { addNewComment } from "./commentsAsyncThunks";
const AddCommentForm = ({
  commentableType,
  commentableId,
  setComponentStatus,
}) => {
  const currentUserId = useSelector((state) => state.session.currentUserId);
  const authorId = currentUserId;

  const [body, setBody] = useState("");
  const onBodyChanged = (e) => setBody(e.target.value);

  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () =>
    expanded ? setExpanded(false) : setExpanded(true);

  const dispatch = useDispatch();

  const canSave =
    [authorId, commentableType, commentableId, body].every(Boolean) &&
    addRequestStatus === "idle";
  const handleSubmit = async () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        const response = await dispatch(
          addNewComment({
            commenting_user_id: authorId,
            commentable_type: commentableType,
            commentable_id: commentableId,
            body: body,
          })
        );
        unwrapResult(response);
        setBody("");
      } catch (error) {
        console.error("Failed to save the comment: ", error);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <section className="CommentForm">
      <form>
        <div className="avatarBoxWithInputBox">
          <div className="avatarBox">
            <div className="avatar"></div>
          </div>
          <div className="inputBox">
            <textarea
              id="commentBody"
              name="commentBody"
              value={body}
              onChange={onBodyChanged}
              placeholder="Add a comment"
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

export default AddCommentForm;
