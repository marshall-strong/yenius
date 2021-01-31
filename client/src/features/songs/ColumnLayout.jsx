import React, { useRef, useState } from "react";

import ColumnLayoutFlex from "./ColumnLayoutFlex";
import Lyrics from "./Lyrics";
import SongComments from "./SongComments";

import "../.././stylesheets/ColumnLayout.scss";

// const ColumnPrimary = ({ match, selectedVerseRef }) => {
//   const songId = parseInt(match.params.songId);
//   const verseId = parseInt(match.params.verseId);
//   return (
//     <div className="column_layout-column_span column_layout-column_span--primary">
//       <Lyrics
//         selectedVerseId={verseId}
//         selectedVerseRef={selectedVerseRef}
//         songId={songId}
//       />
//       <SongComments songId={songId} />
//     </div>
//   );
// };

// const ColumnSecondary = ({ match, selectedVerseRef}) => {
//   return (
//     <div className="column_layout-column_span column_layout-column_span--secondary">
//       <ColumnLayoutFlex match={match} selectedVerseRef={selectedVerseRef} />
//     </div>
//   );
// };

const ColumnLayout = ({ match }) => {
  const selectedVerseRef = useRef();
  const songId = parseInt(match.params.songId);

  const columnPrimary = (
    <div className="column_layout-column_span column_layout-column_span--primary">
      <Lyrics match={match} selectedVerseRef={selectedVerseRef} />
      <SongComments songId={songId} />
    </div>
  );

  const columnSecondary = (
    <div className="column_layout-column_span column_layout-column_span--secondary">
      <ColumnLayoutFlex match={match} selectedVerseRef={selectedVerseRef} />
    </div>
  );

  return (
    <div className="song_body column_layout">
      {columnPrimary}
      {/* <ColumnPrimary match={match} selectedVerseRef={selectedVerseRef} /> */}
      {columnSecondary}
      {/* <ColumnSecondary selectedVerseRef={selectedVerseRef} match={match} /> */}
    </div>
  );
};

export default ColumnLayout;
