import React from "react";
import { useSelector } from "react-redux";

import { selectArtistById } from "./artistsSlice";
import { addArtistComment } from "../comments/commentsAsyncThunks";

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

export default ArtistComments;
