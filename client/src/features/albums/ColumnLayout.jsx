import React from "react";

import ColumnPrimary from "./ColumnPrimary";
import ColumnSecondary from "./ColumnSecondary";

import "../.././stylesheets/ColumnLayout.scss";

const ColumnLayout = ({ albumId }) => {
  return (
    <div className="song_body column_layout">
      <ColumnPrimary albumId={albumId} />
      <ColumnSecondary albumId={albumId} />
    </div>
  );
};

export default ColumnLayout;
