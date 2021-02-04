import React, { useRef, useState } from "react";

import ColumnSecondary from "./ColumnSecondary";
import Lyrics from "./Lyrics";
import SongComments from "./SongComments";

// import "../.././stylesheets/ColumnLayout.scss";

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
      <ColumnSecondary match={match} selectedVerseRef={selectedVerseRef} />
    </div>
  );

  return (
    <div className="song_body column_layout">
      {columnPrimary}
      {columnSecondary}
    </div>
  );
};

export default ColumnLayout;
