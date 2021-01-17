import React from "react";
import { useSelector } from "react-redux";

import Banner from "./Banner";
import ColumnLayout from "./ColumnLayout";
import Breadcrumbs from "./Breadcrumbs";

const PageLayout = ({ artistId }) => {
  const isFulfilled = (request) => request === "fulfilled";

  const fetchArtistPageStatus = useSelector(
    (state) => state.artists.status.fetchArtistPage
  );
  const bannerRequests = [fetchArtistPageStatus];
  const banner = bannerRequests.every(isFulfilled) ? (
    <Banner artistId={artistId} />
  ) : (
    <div className="loader" />
  );

  return (
    <section className="PageLayout">
      <div>
        {banner}
        <ColumnLayout artistId={artistId} />
        <Breadcrumbs />
      </div>
    </section>
  );
};

export default PageLayout;
