import React from "react";
import CommentsList from "./CommentsList";
import AddCommentForm from "./AddCommentForm";
import "../../assets/stylesheets/Comments.scss";

const CommentsContainer = ({
  addComment,
  commentable,
  commentableId,
  commentableType,
}) => {
  return (
    <div className="Comments">
      <div className="grayContainer">
        <AddCommentForm
          addComment={addComment}
          commentableId={commentableId}
          commentableType={commentableType}
        />
        <CommentsList commentable={commentable} />
        <div className="ShowMore"></div>
      </div>
      <br />
    </div>
  );
};

export default CommentsContainer;
