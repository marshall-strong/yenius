import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchAlbumComments,
  fetchArtistComments,
  fetchSongComments,
  fetchVerseComments,
} from "./commentsAsyncThunks";

import { selectAlbumById } from "../albums/albumsSlice";
import { selectArtistById } from "../artists/artistsSlice";
import { selectSongById } from "../songs/songsSlice";
import { selectVerseById } from "../verses/versesSlice";
import { selectCommentById } from "./commentsSlice";
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

const CommentsList = ({ commentable }) => {
  let commentsList;
  if (commentable.comments) {
    commentsList = commentable.comments.map((commentId) => (
      <Comment key={commentId} commentId={commentId} />
    ));
  }

  return <div className="CommentsList">{commentsList}</div>;
};

const CommentsSection = ({ commentableType, commentableId }) => {
  const dispatch = useDispatch();
  const [componentStatus, setComponentStatus] = useState("idle");

  useEffect(() => {
    if (componentStatus === "idle" || componentStatus === "updated") {
      if (commentableType === "Album") {
        dispatch(fetchAlbumComments(commentableId));
        setComponentStatus("requestSent");
      }
      if (commentableType === "Artist") {
        dispatch(fetchArtistComments(commentableId));
        setComponentStatus("requestSent");
      }
      if (commentableType === "Song") {
        dispatch(fetchSongComments(commentableId));
        setComponentStatus("requestSent");
      }
      if (commentableType === "Verse") {
        dispatch(fetchVerseComments(commentableId));
        setComponentStatus("requestSent");
      }
    }
  }, [componentStatus, commentableType, commentableId, dispatch]);

  const asyncRequestStatus = useSelector((state) => state.asyncRequests.status);
  const error = useSelector((state) => state.asyncRequests.errors[-1]);

  const album = useSelector((state) => selectAlbumById(state, commentableId));
  const artist = useSelector((state) => selectArtistById(state, commentableId));
  const song = useSelector((state) => selectSongById(state, commentableId));
  const verse = useSelector((state) => selectVerseById(state, commentableId));

  let commentable;

  if (commentableType === "Album") {
    commentable = album;
  } else if (commentableType === "Artist") {
    commentable = artist;
  } else if (commentableType === "Song") {
    commentable = song;
  } else if (commentableType === "Verse") {
    commentable = verse;
  }

  let content;

  if (asyncRequestStatus === "pending") {
    content = <div className="loader">Loading...</div>;
  } else if (asyncRequestStatus === "rejected") {
    content = <div>{error}</div>;
  } else if (
    asyncRequestStatus === "fulfilled" &&
    (!commentable || !commentable.comments)
  ) {
    content = (
      <div className="grayContainer">
        <AddCommentForm
          commentableType={commentableType}
          commentableId={commentableId}
          setComponentStatus={setComponentStatus}
        />
        <div className="ShowMore"></div>
      </div>
    );
  } else if (asyncRequestStatus === "fulfilled" && commentable.comments) {
    content = (
      <div className="grayContainer">
        <AddCommentForm
          commentableType={commentableType}
          commentableId={commentableId}
          setComponentStatus={setComponentStatus}
        />
        <CommentsList commentable={commentable} />
        <div className="ShowMore"></div>
      </div>
    );
  }

  return (
    <div className="Comments">
      <div className="grayContainer">{content}</div>
      <br />
    </div>
  );
};

export default CommentsSection;
