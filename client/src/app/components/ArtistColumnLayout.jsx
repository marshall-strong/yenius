import React from "react";

import ArtistComments from "./ArtistComments";
import Description from "./ArtistDescription";

// import "../.././stylesheets/ColumnLayout.scss";

const ColumnPrimary = ({ artistId }) => {
  return (
    <div className="column_layout-column_span column_layout-column_span--primary">
      <ArtistComments artistId={artistId} />
    </div>
  );
};

const ColumnSecondary = ({ artistId }) => {
  return (
    <div className="column_layout-column_span column_layout-column_span--secondary u-top_margin column_layout-flex_column">
      <div className="column_layout-column_span-initial_content">
        <Description artistId={artistId} />
      </div>
      <div className="column_layout-flex_column-fill_column"></div>
    </div>
  );
};

const ColumnLayout = ({ artistId }) => {
  return (
    <div className="song_body column_layout">
      <ColumnPrimary artistId={artistId} />
      <ColumnSecondary artistId={artistId} />
    </div>
  );
};

export default ColumnLayout;
