import React from "react";

import AnnotationsContainer from "./AnnotationsContainer";
import Description from "./Description";
// import Lyrics from "./Lyrics";
import SongAlbum from "./SongAlbum";
// import SongComments from "./SongComments";
import TrackInfo from "./TrackInfo";

// import "../.././stylesheets/ColumnLayout.scss";

// const ColumnPrimary = ({ songId }) => {
//   return (
//     <div className="column_layout-column_span column_layout-column_span--primary">
//       <Lyrics songId={songId} />
//       <SongComments songId={songId} />
//     </div>
//   );
// };

const ColumnSecondary = ({ match }) => {
  const songId = parseInt(match.params.songId);
  const verseId = parseInt(match.params.verseId);

  const songKlass = match.params.verseId
    ? "ColumnSecondaryShowSong display-none"
    : "ColumnSecondaryShowSong";
  const verseKlass = match.params.verseId
    ? "ColumnSecondaryShowVerse"
    : "ColumnSecondaryShowVerse display-none";

  return (
    <div className="column_layout-column_span column_layout-column_span--secondary u-top_margin column_layout-flex_column">
      <div className={songKlass}>
        <div className="column_layout-column_span-initial_content">
          <Description songId={songId} />
          <TrackInfo songId={songId} />
          <SongAlbum songId={songId} />
        </div>
      </div>
      <div className={verseKlass}>
        <div className="column_layout-flex_column-fill_column">
          <AnnotationsContainer verseId={verseId} />
        </div>
      </div>
    </div>
  );
};

// const ColumnLayout = ({ match }) => {
//   const songId = parseInt(match.params.songId);
//   return (
//     <div className="song_body column_layout">
//       <ColumnPrimary songId={songId} />
//       <ColumnSecondary match={match} />
//     </div>
//   );
// };

// export default ColumnLayout;
export default ColumnSecondary;
