import React from "react";

import ColumnPrimary from "./ColumnPrimary";
import ColumnSecondary from "./ColumnSecondary";

import "../../../assets/stylesheets/ColumnLayout.scss";

const ColumnLayout = ({ artistId }) => {
  return (
    <div className="song_body column_layout">
      <ColumnPrimary artistId={artistId} />
      <ColumnSecondary artistId={artistId} />
    </div>
  );
};

export default ColumnLayout;
