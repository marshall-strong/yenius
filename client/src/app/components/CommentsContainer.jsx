import React from "react";

import AddCommentContainer from "./AddCommentContainer";
import CommentsList from "./CommentsList";

// import "../../stylesheets/AnnotationSidebar.scss";
// import "../../stylesheets/Comments.scss";

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
    </div>
  );
};

export default CommentsContainer;
