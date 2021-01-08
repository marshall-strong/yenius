import React from "react";
// import SongAbout from "../../songs/SongPage/SongAbout";
// import SongAlbum from "../../songs/SongPage/SongAlbum";
// import SongTrackInfo from "../../songs/SongPage/SongTrackInfo";
import SongComments from "../../songs/SongPage/SongComments";
import SongLyrics from "../../songs/SongPage/SongLyrics";
import VerseAnnotations from "./VerseAnnotations";
import VerseShow from "./VerseShow";
import VerseComments from "./VerseComments";

const VerseLayout = ({ songId, verseId }) => {
  return (
    <div className="song_body column_layout">
      <div className="column_layout-column_span column_layout-column_span--primary">
        <SongLyrics songId={songId} />
        <SongComments songId={songId} />
      </div>
      <div className="column_layout-column_span column_layout-column_span--secondary u-top_margin column_layout-flex_column">
        <div className="column_layout-column_span-initial_content">
          {/* <SongAbout songId={songId} />
          <SongTrackInfo songId={songId} />
          <SongAlbum songId={songId} /> */}
        </div>
        <div className="column_layout-flex_column-fill_column">
          <VerseAnnotations />
          <VerseShow verseId={verseId} />
          <VerseComments verseId={verseId} />
        </div>
      </div>
    </div>
  );
};

export default VerseLayout;
