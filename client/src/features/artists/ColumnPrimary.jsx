import React from "react";

import ArtistComments from "./ArtistComments";

const ColumnPrimary = ({ artistId }) => {
  return (
    <div className="column_layout-column_span column_layout-column_span--primary">
      <ArtistComments artistId={artistId} />
    </div>
  );
};

export default ColumnPrimary;
