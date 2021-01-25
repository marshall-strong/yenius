import React from "react";

import CommentsList from "./CommentsList";
import AddCommentForm from "./AddCommentForm";

import "../.././stylesheets/Comments.scss";

const CommentsContainer = ({ addComment, commentableId, commentableType }) => {
  // const [commentIds, setCommentIds] = useState(null);
  // const commentableIds = useSelector((state) =>
  //   selectCommentIdsByCommentable(state, commentableId, commentableType)
  // );
  // setCommentIds(commentableIds);
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
