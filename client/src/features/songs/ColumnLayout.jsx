import React from "react";

import ColumnLayoutFlex from "./ColumnLayoutFlex";
import Lyrics from "./Lyrics";
import SongComments from "./SongComments";

import "../.././stylesheets/ColumnLayout.scss";

const ColumnPrimary = ({ match, selectedVerseId }) => {
  const songId = parseInt(match.params.songId);
  return (
    <div className="column_layout-column_span column_layout-column_span--primary">
      <Lyrics selectedVerseId={selectedVerseId} songId={songId} />
      <SongComments songId={songId} />
    </div>
  );
};

const ColumnSecondary = ({ match }) => {
  return <ColumnLayoutFlex match={match} />;
};

const ColumnLayout = ({ match, selectedVerseId }) => {
  return (
    <div className="song_body column_layout">
      <ColumnPrimary match={match} selectedVerseId={selectedVerseId} />
      <ColumnSecondary match={match} selectedVerseId={selectedVerseId} />
    </div>
  );
};

export default ColumnLayout;
