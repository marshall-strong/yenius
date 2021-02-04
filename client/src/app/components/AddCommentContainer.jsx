import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

// https://iconmonstr.com/media-control-50-svg/
const squareStop = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M2 2h20v20h-20z" />
  </svg>
);

const SignupButton = () => {
  return (
    <div className="PageGridFull-idpot7-0 PageGridFull">
      <div className="Communitydesktop__Buttons-x5mxcf-0 Communitydesktop__Buttons">
        <span className="Communitydesktop__Join-x5mxcf-1 Communitydesktop__Join">
          <Link to="/signup" className="SquareButton-sc-109lda7-0 SquareButton">
            Join Our Community
          </Link>
        </span>
      </div>
    </div>
  );
};

const AddCommentInitial = ({ handleClick }) => {
  return (
    <section className="CommentForm">
      <form>
        <div className="avatarBoxWithInputBox">
          <div className="inputBox">
            <textarea
              id="commentBody"
              name="commentBody"
              placeholder="Add a comment"
              onClick={handleClick}
            />
          </div>
        </div>
      </form>
    </section>
  );
};

const NotSignedIn = () => (
  <section className="CommentForm">
    <form>
      <div className="avatarBoxWithInputBox">
        <div className="inputBox">
          <textarea
            id="commentBody"
            name="commentBody"
            placeholder="Sign up to add a comment"
            onClick={null}
          />
        </div>
      </div>
      <br />
      <SignupButton />
    </form>
  </section>
);

const AddCommentForm = ({ addComment, commentableType, commentableId }) => {
  const currentUser = useSelector((state) => state.session.currentUser);
  const authorId = currentUser ? currentUser.id : null;

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
          addComment({
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
              placeholder="Add a comment"
              onClick={toggleExpanded}
            />
          </div>
        </div>
        <br />
        <span
          type="button"
          onClick={handleSubmit}
          disabled={!canSave}
          className="submitButton"
        >
          Submit
        </span>
      </form>
    </section>
  );
};

const AddCommentContainer = ({
  addComment,
  commentableType,
  commentableId,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const currentUser = useSelector((state) => state.session.currentUser);

  const handleClick = (e) => {
    e.preventDefault();
    setIsExpanded(true);
  };

  const content = isExpanded ? (
    currentUser ? (
      <AddCommentForm
        addComment={addComment}
        commentableId={commentableId}
        commentableType={commentableType}
      />
    ) : (
      <NotSignedIn />
    )
  ) : (
    <AddCommentInitial handleClick={handleClick} />
  );

  return content;
};

export default AddCommentContainer;
