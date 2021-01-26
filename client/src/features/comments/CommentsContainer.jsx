import React from "react";

import AddCommentContainer from "./AddCommentContainer";
import CommentsList from "./CommentsList";

import "../.././stylesheets/Comments.scss";

const CommentsContainer = ({ addComment, commentableId, commentableType }) => {
  return (
    <div className="Comments">
      <div className="grayContainer">
        <AddCommentContainer
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
