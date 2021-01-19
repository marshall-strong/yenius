import React from "react";
import { useSelector } from "react-redux";

import { addArtistComment } from "../comments/commentsAsyncThunks";

import { selectArtistById } from "./artistsSlice";

import CommentsContainer from "../comments/CommentsContainer";

const ArtistComments = ({ artistId }) => {
  const artist = useSelector((state) => selectArtistById(state, artistId));
  const content =
    !artist || !artist.comments ? null : (
      <CommentsContainer
        addComment={addArtistComment}
        commentableId={artistId}
        commentableType={"Artist"}
      />
    );
  return content;
};

const Loader = ({ artistId }) => {
  const fetchArtistComments = useSelector(
    (state) => state.comments.status.fetchArtistComments
  );
  const asyncRequests = [fetchArtistComments];
  if (asyncRequests.every((status) => status === "fulfilled")) {
    return <ArtistComments artistId={artistId} />;
  } else {
    return <div className="loader" />;
  }
};

export default Loader;
