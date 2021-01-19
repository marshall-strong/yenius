import React from "react";

import MockComponent from "./MockComponent";
import ArtistComments from "./ArtistComments";

const ColumnPrimary = ({ artistId }) => {
  return (
    <div className="column_layout-column_span column_layout-column_span--primary">
      <MockComponent />
      <ArtistComments artistId={artistId} />
    </div>
  );
};

export default ColumnPrimary;
