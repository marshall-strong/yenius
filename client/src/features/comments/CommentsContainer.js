import React from "react";
import { useSelector } from "react-redux";
import { selectCommentsStatus } from "./commentsSlice";
import { selectAlbumById } from "../albums/albumsSlice";
import { selectArtistById } from "../artists/artistsSlice";
import { selectSongById } from "../songs/songsSlice";
import CommentsList from "./CommentsList";
import AddCommentForm from "./AddCommentForm";
import "../../assets/stylesheets/Comments.scss";

const CommentsContainer = ({ commentableId, commentableType }) => {
  const commentsStatus = useSelector((state) => selectCommentsStatus(state));
  const album = useSelector((state) => selectAlbumById(state, commentableId));
  const artist = useSelector((state) => selectArtistById(state, commentableId));
  const song = useSelector((state) => selectSongById(state, commentableId));
  let commentable;
  if (commentableType === "Album") {
    commentable = album;
  } else if (commentableType === "Artist") {
    commentable = artist;
  } else if (commentableType === "Song") {
    commentable = song;
  }

  return (
    <div className="Comments">
      <div className="grayContainer">
        <AddCommentForm
          commentableType={commentableType}
          commentableId={commentableId}
        />
        <CommentsList
          commentable={commentable}
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
