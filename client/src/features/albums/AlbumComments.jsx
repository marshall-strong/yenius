import React from "react";
import { useSelector } from "react-redux";

import { selectAlbumById } from "./albumsSlice";
import { addAlbumComment } from "../comments/commentsAsyncThunks";

import CommentsContainer from "../comments/CommentsContainer";

const AlbumComments = ({ albumId }) => {
  const album = useSelector((state) => selectAlbumById(state, albumId));
  const content =
    !album || !album.comments ? null : (
      <CommentsContainer
        addComment={addAlbumComment}
        commentableId={albumId}
        commentableType={"Album"}
      />
    );
  return content;
};

export default AlbumComments;
