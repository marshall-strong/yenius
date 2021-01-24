import React from "react";

import ColumnPrimary from "./ColumnPrimary";
import ColumnSecondary from "./ColumnSecondary";

import "../../../assets/stylesheets/ColumnLayout.scss";

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
