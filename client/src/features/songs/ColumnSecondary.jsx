import React from "react";
// import { useSelector } from "react-redux";
import Description from "./Description";
import TrackInfo from "./TrackInfo";
import SongAlbum from "./SongAlbum";
import VerseAnnotations from "./VerseAnnotations";

const ColumnSecondary = ({ match }) => {
  const songId = parseInt(match.params.songId);
  const verseId = parseInt(match.params.verseId);
  // const status = useSelector((state) => state.songs.status);
  // const {
  // fetchSongAlbum,
  // fetchSongArtistCredits,
  // fetchSongDescription,
  // fetchSongSampleCredits,
  //   fetchVerseComments,
  // } = status;
  // const isFulfilled = (request) => request === "fulfilled";

  // const descriptionRequests = [fetchSongDescription];
  // const description = descriptionRequests.every(isFulfilled) ? (
  //   <Description songId={songId} />
  // ) : (
  //   <div className="loader" />
  // );

  // const trackInfoRequests = [fetchSongArtistCredits, fetchSongSampleCredits];
  // const trackInfo = trackInfoRequests.every(isFulfilled) ? (
  //   <TrackInfo songId={songId} />
  // ) : (
  //   <div className="loader" />
  // );

  // const songAlbumRequests = [fetchSongAlbum];
  // const songAlbum = songAlbumRequests.every(isFulfilled) ? (
  //   <SongAlbum songId={songId} />
  // ) : (
  //   <div className="loader" />
  // );

  // const verseRequests = [fetchVerseComments];
  // const verseAnnotations = verseRequests.every(isFulfilled) ? (
  //   <VerseAnnotations verseId={verseId} />
  // ) : null;

  // const klassName = match.params.verseId
  //   ? "display-none"
  //   : "column_layout-column_span-initial_content";

  let songKlass;
  let verseKlass;
  if (match.params.verseId) {
    songKlass = "ColumnSecondaryShowSong display-none";
    verseKlass = "ColumnSecondaryShowVerse";
  } else {
    songKlass = "ColumnSecondaryShowSong";
    verseKlass = "ColumnSecondaryShowVerse display-none";
  }

  return (
    <div className="column_layout-column_span column_layout-column_span--secondary u-top_margin column_layout-flex_column">
      <div className={songKlass}>
        <div className="column_layout-column_span-initial_content">
          {/* {description} */}
          <Description songId={songId} />
          {/* {trackInfo} */}
          <TrackInfo songId={songId} />
          {/* {songAlbum} */}
          <SongAlbum songId={songId} />
        </div>
      </div>
      <div className={verseKlass}>
        <div className="column_layout-flex_column-fill_column">
          {/* {verseAnnotations} */}
          <VerseAnnotations verseId={verseId} />
        </div>
      </div>
    </div>
  );
};

export default ColumnSecondary;
