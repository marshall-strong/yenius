import React from "react";

import ColumnLayoutFlex from "./ColumnLayoutFlex";
import Lyrics from "./Lyrics";
import SongComments from "./SongComments";

import "../.././stylesheets/ColumnLayout.scss";

const ColumnPrimary = ({ songId }) => {
  return (
    <div className="column_layout-column_span column_layout-column_span--primary">
      <Lyrics songId={songId} />
      <SongComments songId={songId} />
    </div>
  );
};

const ColumnSecondary = ({ match }) => {
  return <ColumnLayoutFlex match={match} />;
};

const ColumnLayout = ({ match }) => {
  const songId = parseInt(match.params.songId);
  return (
    <div className="song_body column_layout">
      <ColumnPrimary songId={songId} />
      <ColumnSecondary match={match} />
    </div>
  );
};

export default ColumnLayout;
