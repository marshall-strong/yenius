import React from "react";
import { useSelector } from "react-redux";

import { selectAlbumById } from "../../features/albums/albumsSlice";
import { addAlbumComment } from "../../features/comments/commentsSliceThunks";

import CommentsContainer from "./CommentsContainer";

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

const Loader = ({ albumId }) => {
  const fetchAlbumComments = useSelector(
    (state) => state.comments.status.fetchAlbumComments
  );
  const asyncRequests = [fetchAlbumComments];
  if (asyncRequests.every((status) => status === "fulfilled")) {
    return <AlbumComments albumId={albumId} />;
  } else {
    return <div className="loader" />;
  }
};

export default Loader;
