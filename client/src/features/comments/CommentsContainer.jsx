import React from "react";
import { useSelector } from "react-redux";
import { selectCommentIdsByCommentable } from "./commentsSlice";
import CommentsList from "./CommentsList";
import AddCommentForm from "./AddCommentForm";
import "../../assets/stylesheets/Comments.scss";

const CommentsContainer = ({ addComment, commentableId, commentableType }) => {
  const commentIds = useSelector((state) =>
    selectCommentIdsByCommentable(state, commentableId, commentableType)
  );
  return (
    <div className="Comments">
      <div className="grayContainer">
        <AddCommentForm
          addComment={addComment}
          commentableId={commentableId}
          commentableType={commentableType}
        />
        <CommentsList commentIds={commentIds} />
        <div className="ShowMore"></div>
      </div>
      <br />
    </div>
  );
};

export default CommentsContainer;
