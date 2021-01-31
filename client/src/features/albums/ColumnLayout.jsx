import React from "react";

import AlbumComments from "./AlbumComments";
import Description from "./Description";
import Tracklist from "./Tracklist";

import "../.././stylesheets/ColumnLayout.scss";

const ColumnPrimary = ({ albumId }) => {
  return (
    <div className="column_layout-column_span column_layout-column_span--primary">
      <Tracklist albumId={albumId} />
      <AlbumComments albumId={albumId} />
    </div>
  );
};

const ColumnSecondary = ({ albumId }) => {
  return (
    <div className="column_layout-column_span column_layout-column_span--secondary u-top_margin column_layout-flex_column">
      <div className="column_layout-column_span-initial_content">
        <Description albumId={albumId} />
      </div>
      <div className="column_layout-flex_column-fill_column"></div>
    </div>
  );
};

const ColumnLayout = ({ albumId }) => {
  return (
    <div className="song_body column_layout">
      <ColumnPrimary albumId={albumId} />
      <ColumnSecondary albumId={albumId} />
    </div>
  );
};

export default ColumnLayout;
