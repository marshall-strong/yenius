import React from "react";
import { useSelector } from "react-redux";

import Tracklist from "./Tracklist";
import AlbumComments from "./AlbumComments";

const ColumnPrimary = ({ albumId }) => {
  const isFulfilled = (request) => request === "fulfilled";

  const fetchAlbumPageStatus = useSelector(
    (state) => state.albums.status.fetchAlbumPage
  );
  const tracklistRequests = [fetchAlbumPageStatus];
  const tracklist = tracklistRequests.every(isFulfilled) ? (
    <Tracklist albumId={albumId} />
  ) : (
    <div className="loader" />
  );

  const fetchAlbumCommentsStatus = useSelector(
    (state) => state.comments.status.fetchAlbumComments
  );
  const albumCommentsRequests = [fetchAlbumCommentsStatus];
  const albumComments = albumCommentsRequests.every(isFulfilled) ? (
    <AlbumComments albumId={albumId} />
  ) : (
    <div className="loader" />
  );
  return (
    <div className="column_layout-column_span column_layout-column_span--primary">
      {tracklist}
      {albumComments}
    </div>
  );
};

export default ColumnPrimary;
