import React from "react";
import { useSelector } from "react-redux";

import Description from "./Description";
import MockComponent from "./MockComponent";

const ColumnSecondary = ({ albumId }) => {
  const isFulfilled = (request) => request === "fulfilled";
  const fetchAlbumPageStatus = useSelector(
    (state) => state.albums.status.fetchAlbumPage
  );
  const requests = [fetchAlbumPageStatus];

  const description = requests.every(isFulfilled) ? (
    <Description albumId={albumId} />
  ) : (
    <div className="loader" />
  );

  const mockComponent = requests.every(isFulfilled) ? (
    <MockComponent albumId={albumId} />
  ) : (
    <div className="loader" />
  );

  return (
    <div className="column_layout-column_span column_layout-column_span--secondary u-top_margin column_layout-flex_column">
      <div className="column_layout-column_span-initial_content">
        {description}
        {mockComponent}
        {mockComponent}
      </div>
      <div className="column_layout-flex_column-fill_column"></div>
    </div>
  );
};

export default ColumnSecondary;
