import React from "react";
import { useSelector } from "react-redux";
import Banner from "./Banner";
import ColumnLayout from "./ColumnLayout";
import Breadcrumbs from "./Breadcrumbs";

const PageLayout = ({ match }) => {
  const { songId } = match.params;
  const status = useSelector((state) => state.songs.status);
  const { fetchSongArtistCredits, fetchSongBanner } = status;
  const isFulfilled = (request) => request === "fulfilled";

  const bannerRequests = [fetchSongArtistCredits, fetchSongBanner];
  const banner = bannerRequests.every(isFulfilled) ? (
    <Banner songId={songId} />
  ) : (
    <div className="loader" />
  );

  return (
    <section className="PageLayout">
      <div>
        {banner}
        <ColumnLayout songId={songId} />
        <Breadcrumbs match={match} />
      </div>
    </section>
  );
};

export default PageLayout;
