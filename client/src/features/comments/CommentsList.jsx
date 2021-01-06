import React from "react";
import { useSelector } from "react-redux";

import { selectAlbumById } from "../albums/albumsSlice";
import { selectArtistById } from "../artists/artistsSlice";
import { selectSongById } from "../songs/songsSlice";
import { selectCommentById } from "../comments/commentsSlice";
import { selectUserById } from "../users/usersSlice";

import AddCommentForm from "./AddCommentForm";
import TimeAgo from "./TimeAgo";
import "../../assets/stylesheets/Comments.scss";

const Comment = ({ commentId }) => {
  const comment = useSelector((state) => selectCommentById(state, commentId));
  const user = useSelector((state) => selectUserById(state, comment.authorId));
  return (
    <article className="Comment" key={comment.id}>
      <div className="userBadgeAndTimestamp">
        <div className="userBadge">{user.username}</div>
        <TimeAgo timestamp={comment.createdAt} />
      </div>
      <div className="standard-rich-content">{comment.body}</div>
    </article>
  );
};

const CommentsList = ({ commentableType, commentableId }) => {
  let commentable;
  const album = useSelector((state) => selectAlbumById(state, commentableId));
  const artist = useSelector((state) => selectArtistById(state, commentableId));
  const song = useSelector((state) => selectSongById(state, commentableId));
  if (commentableType === "Album") {
    commentable = album;
  } else if (commentableType === "Artist") {
    commentable = artist;
  } else if (commentableType === "Song") {
    commentable = song;
  }

  let commentsList;
  if (commentable.comments) {
    commentsList = commentable.comments.map((commentId) => (
      <Comment key={commentId} commentId={commentId} />
    ));
  }

  return (
    <div className="Comments">
      <div className="grayContainer">
        <AddCommentForm
          commentableType={commentableType}
          commentableId={commentableId}
        />
        <div className="CommentsList">{commentsList}</div>
        <div className="ShowMore"></div>
      </div>
      <br />
    </div>
  );
};

export default CommentsList;
