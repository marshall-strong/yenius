import React, { useState } from "react";

import ColumnLayoutFlex from "./ColumnLayoutFlex";
import Lyrics from "./Lyrics";
import SongComments from "./SongComments";

import "../.././stylesheets/ColumnLayout.scss";

const ColumnPrimary = ({ match, setClientRect }) => {
  const songId = parseInt(match.params.songId);
  const verseId = parseInt(match.params.verseId);
  return (
    <div className="column_layout-column_span column_layout-column_span--primary">
      <Lyrics
        selectedVerseId={verseId}
        setClientRect={setClientRect}
        songId={songId}
      />
      <SongComments songId={songId} />
    </div>
  );
};

const ColumnSecondary = ({ match }) => {
  return (
    <div className="column_layout-column_span column_layout-column_span--secondary">
      <ColumnLayoutFlex match={match} />
    </div>
  );
};

const ColumnLayout = ({ match }) => {
  const [clientRect, setClientRect] = useState(null);
  return (
    <div className="song_body column_layout">
      <ColumnPrimary match={match} setClientRect={setClientRect} />
      <ColumnSecondary clientRect={clientRect} match={match} />
    </div>
  );
};

export default ColumnLayout;
