import React from "react";
import SongAbout from "./SongAbout";
import SongLyrics from "./SongLyrics";
import SongTrackInfo from "./SongTrackInfo";
import SongAlbum from "./SongAlbum";
import SongComments from "./SongComments";

const SongLayout = ({ songId }) => {
  return (
    <div className="song_body column_layout">
      <div className="column_layout-column_span column_layout-column_span--primary">
        <SongLyrics songId={songId} />
        <SongComments songId={songId} />
      </div>
      <div className="column_layout-column_span column_layout-column_span--secondary u-top_margin column_layout-flex_column">
        <div className="column_layout-column_span-initial_content">
          <SongAbout songId={songId} />
          <SongTrackInfo songId={songId} />
          <SongAlbum songId={songId} />
        </div>
        <div className="column_layout-flex_column-fill_column"></div>
      </div>
    </div>
  );
};

export default SongLayout;
