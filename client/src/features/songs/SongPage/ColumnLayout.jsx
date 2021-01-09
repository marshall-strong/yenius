import React from "react";
import ColumnPrimary from "./ColumnPrimary";
import ColumnSecondary from "./ColumnSecondary";
import "../../../assets/stylesheets/column_layout.scss";

const ColumnLayout = ({ songId }) => {
  return (
    <div className="song_body column_layout">
      <ColumnPrimary songId={songId} />
      <ColumnSecondary songId={songId} />
    </div>
  );
};

export default ColumnLayout;
