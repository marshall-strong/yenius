import React from "react";
import ColumnPrimary from "./ColumnPrimary";
import ColumnSecondary from "./ColumnSecondary";
import "../../../assets/stylesheets/column_layout.scss";

const ColumnLayout = ({ match, showVerse, songId }) => {
  return (
    <div className="song_body column_layout">
      <ColumnPrimary songId={songId} />
      <ColumnSecondary match={match} showVerse={showVerse} songId={songId} />
    </div>
  );
};

export default ColumnLayout;
