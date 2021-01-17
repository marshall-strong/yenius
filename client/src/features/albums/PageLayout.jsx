import React from "react";
import { useSelector } from "react-redux";

import Banner from "./Banner";
import ColumnLayout from "./ColumnLayout";
import Breadcrumbs from "../../app/Breadcrumbs";

const PageLayout = ({ albumId, match }) => {
  const isFulfilled = (request) => request === "fulfilled";

  const fetchAlbumPageStatus = useSelector(
    (state) => state.albums.status.fetchAlbumPage
  );
  const bannerRequests = [fetchAlbumPageStatus];
  const banner = bannerRequests.every(isFulfilled) ? (
    <Banner albumId={albumId} />
  ) : (
    <div className="loader" />
  );

  return (
    <section className="PageLayout">
      <div>
        {banner}
        <ColumnLayout albumId={albumId} />
        <Breadcrumbs match={match} />
      </div>
    </section>
  );
};

export default PageLayout;
