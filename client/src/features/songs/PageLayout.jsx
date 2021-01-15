import React from "react";
import { useSelector } from "react-redux";
import Banner from "./Banner";
import ColumnLayout from "./ColumnLayout";
import Breadcrumbs from "./Breadcrumbs";

const PageLayout = ({ match, showVerse }) => {
  const { songId, verseId } = match.params;
  const status = useSelector((state) => state.songs.status);
  const { fetchSongVerse, fetchSongArtistCredits, fetchSongBanner } = status;
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
        <ColumnLayout match={match} showVerse={showVerse} songId={songId} />
        <Breadcrumbs match={match} />
      </div>
    </section>
  );
};

export default PageLayout;
