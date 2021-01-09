import React from "react";
import Description from "./Description";
import TrackInfo from "./TrackInfo";
import SongAlbum from "./SongAlbum";

const ColumnSecondary = ({ songId }) => {
  return (
    <div className="column_layout-column_span column_layout-column_span--secondary u-top_margin column_layout-flex_column">
      <div className="column_layout-column_span-initial_content">
        <Description songId={songId} />
        <TrackInfo songId={songId} />
        <SongAlbum songId={songId} />
      </div>
      <div className="column_layout-flex_column-fill_column"></div>
    </div>
  );
};

export default ColumnSecondary;
