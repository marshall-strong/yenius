import React from "react";

import AlbumComments from "./AlbumComments";
import Tracklist from "./Tracklist";

const ColumnPrimary = ({ albumId }) => {
  return (
    <div className="column_layout-column_span column_layout-column_span--primary">
      <Tracklist albumId={albumId} />
      <AlbumComments albumId={albumId} />
    </div>
  );
};

export default ColumnPrimary;
