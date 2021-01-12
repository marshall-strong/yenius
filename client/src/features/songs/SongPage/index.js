import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSong,
  fetchSongAlbum,
  fetchSongAnnotations,
  fetchSongArtistCredits,
  fetchSongBanner,
  fetchSongComments,
  fetchSongDescription,
  fetchSongLyrics,
  fetchSongSampleCredits,
} from "../songsAsyncThunks";
import { selectSongById } from "../songsSlice";
import PageLayout from "./PageLayout";
import NotFound from "../../../NotFound";
import "../../../assets/stylesheets/SongShow.scss";

const ShowSong = ({ match }) => {
  let content;
  const dispatch = useDispatch();
  const { songId } = match.params;
  const [lastSongFetched, setLastSongFetched] = useState(null);

  const song = useSelector((state) => selectSongById(state, songId));
  const status_fetchSong = useSelector((state) => state.songs.status.fetchSong);

  if (!status_fetchSong || status_fetchSong === "pending") {
    content = <div className="loader" />;
  }
  if (!song || status_fetchSong === "rejected") {
    content = (
      <div>
        <h2>Song not found!</h2>
        <NotFound />
      </div>
    );
  }
  if (song && status_fetchSong === "fulfilled") {
    content = <PageLayout match={match} />;
  }

  // fetch data from API
  useEffect(() => {
    if (lastSongFetched !== songId) {
      dispatch(fetchSong(songId));
      setLastSongFetched(songId);
      dispatch(fetchSongAlbum(songId));
      dispatch(fetchSongAnnotations(songId));
      dispatch(fetchSongArtistCredits(songId));
      dispatch(fetchSongBanner(songId));
      dispatch(fetchSongComments(songId));
      dispatch(fetchSongDescription(songId));
      dispatch(fetchSongLyrics(songId));
      dispatch(fetchSongSampleCredits(songId));
    }
  }, [lastSongFetched, songId, dispatch]);

  return content;
};

export default ShowSong;

// const asyncRequestStatus = useSelector((state) => state.asyncRequests.status);
// const error = useSelector((state) => state.asyncRequests.errors[-1]);
// const song = useSelector((state) => selectSongById(state, songId));
// let content;
// if (asyncRequestStatus === "pending") {
//   content = <div className="loader">Loading...</div>;
// } else if (asyncRequestStatus === "rejected") {
//   content = <div>{error}</div>;
// } else if (asyncRequestStatus === "fulfilled" && !song) {
//   content = <h2>Song not found!</h2>;
// } else if (asyncRequestStatus === "fulfilled" && song) {
//   content = (
//     <div>
//       <Banner songId={songId} />
//       <ColumnLayout songId={songId} />
//       <Breadcrumbs match={match} />
//     </div>
//   );
// }
// return <section>{content}</section>;
