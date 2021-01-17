import React from "react";
import { useSelector } from "react-redux";

import MockComponent from "./MockComponent";
import ArtistComments from "./ArtistComments";

const ColumnPrimary = ({ artistId }) => {
  const isFulfilled = (request) => request === "fulfilled";

  const fetchArtistPageStatus = useSelector(
    (state) => state.artists.status.fetchArtistPage
  );
  const mockComponentRequests = [fetchArtistPageStatus];
  const mockComponent = mockComponentRequests.every(isFulfilled) ? (
    <MockComponent />
  ) : (
    <div className="loader" />
  );

  const fetchArtistCommentsStatus = useSelector(
    (state) => state.comments.status.fetchArtistComments
  );
  const artistCommentsRequests = [fetchArtistCommentsStatus];
  const artistComments = artistCommentsRequests.every(isFulfilled) ? (
    <ArtistComments artistId={artistId} />
  ) : (
    <div className="loader" />
  );
  return (
    <div className="column_layout-column_span column_layout-column_span--primary">
      {mockComponent}
      {artistComments}
    </div>
  );
};

export default ColumnPrimary;
