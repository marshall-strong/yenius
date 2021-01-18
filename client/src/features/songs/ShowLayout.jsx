import React from "react";
import { useSelector } from "react-redux";

import Banner from "./Banner";
import ColumnLayout from "./ColumnLayout";
import Breadcrumbs from "../../app/Breadcrumbs";

const SongShowLayout = ({ match, showVerse, songId }) => {
  const isFulfilled = (request) => request === "fulfilled";
  const fetchSongArtistCreditsStatus = useSelector(
    (state) => state.songs.status.fetchSongArtistCredits
  );
  const fetchSongBannerStatus = useSelector(
    (state) => state.songs.status.fetchSongBanner
  );

  const bannerRequests = [fetchSongArtistCreditsStatus, fetchSongBannerStatus];
  const banner = bannerRequests.every(isFulfilled) ? (
    <Banner songId={songId} />
  ) : (
    <div className="loader" />
  );

  return (
    <section className="PageLayout">
      <div>
        {banner}
        <ColumnLayout match={match} showVerse={showVerse} songId={songId} />
        <Breadcrumbs match={match} />
      </div>
    </section>
  );
};

export default SongShowLayout;
