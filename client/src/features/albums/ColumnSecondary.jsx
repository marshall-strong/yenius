import React from "react";

import Description from "./Description";
import MockComponent from "./MockComponent";

const ColumnSecondary = ({ albumId }) => {
  return (
    <div className="column_layout-column_span column_layout-column_span--secondary u-top_margin column_layout-flex_column">
      <div className="column_layout-column_span-initial_content">
        <Description albumId={albumId} />
        <MockComponent />
      </div>
      <div className="column_layout-flex_column-fill_column"></div>
    </div>
  );
};

export default ColumnSecondary;
