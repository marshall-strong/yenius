import React from "react";
import { useSelector } from "react-redux";
import Description from "./Description";
import TrackInfo from "./TrackInfo";
import SongAlbum from "./SongAlbum";

const ColumnSecondary = ({ songId }) => {
  const status = useSelector((state) => state.songs.status);
  const {
    fetchSongAlbum,
    fetchSongArtistCredits,
    fetchSongDescription,
    fetchSongSampleCredits,
  } = status;
  const isFulfilled = (request) => request === "fulfilled";

  const descriptionRequests = [fetchSongDescription];
  const description = descriptionRequests.every(isFulfilled) ? (
    <Description songId={songId} />
  ) : (
    <div className="loader" />
  );

  const trackInfoRequests = [fetchSongArtistCredits, fetchSongSampleCredits];
  const trackInfo = trackInfoRequests.every(isFulfilled) ? (
    <TrackInfo songId={songId} />
  ) : (
    <div className="loader" />
  );

  const songAlbumRequests = [fetchSongAlbum];
  const songAlbum = songAlbumRequests.every(isFulfilled) ? (
    <SongAlbum songId={songId} />
  ) : (
    <div className="loader" />
  );

  return (
    <div className="column_layout-column_span column_layout-column_span--secondary u-top_margin column_layout-flex_column">
      <div className="column_layout-column_span-initial_content">
        {description}
        {trackInfo}
        {songAlbum}
      </div>
      <div className="column_layout-flex_column-fill_column"></div>
    </div>
  );
};

export default ColumnSecondary;
