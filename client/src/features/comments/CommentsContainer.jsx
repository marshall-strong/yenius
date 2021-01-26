import React from "react";

import AddCommentForm from "./AddCommentForm";
import CommentsList from "./CommentsList";

import "../.././stylesheets/Comments.scss";

const CommentsContainer = ({ addComment, commentableId, commentableType }) => {
  return (
    <div className="Comments">
      <div className="grayContainer">
        <AddCommentForm
          addComment={addComment}
          commentableId={commentableId}
          commentableType={commentableType}
        />
        <CommentsList
          commentableId={commentableId}
          commentableType={commentableType}
        />
        <div className="ShowMore"></div>
      </div>
      <br />
    </div>
  );
};

export default CommentsContainer;
