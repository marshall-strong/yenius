import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSongPage } from "../../songs/songsAsyncThunks";
import { selectSongById } from "../../songs/songsSlice";
import { fetchVersePage } from "../versesAsyncThunks";
import { selectVerseById } from "../versesSlice";

import SongBanner from "../../songs/SongPage/Banner";
import SongLayout from "../../songs/SongPage/ColumnLayout";
import VerseLayout from "./VerseLayout";
// import SongBreadcrumbs from "../../songs/SongPage/SongBreadcrumbs";

import "../../../assets/stylesheets/SongShow.scss";
import "../../../assets/stylesheets/column_layout.scss";

const VersePage = ({ match }) => {
  const dispatch = useDispatch();
  const [componentStatus, setComponentStatus] = useState("idle");
  const { songId } = match.params;
  const [lastSongId, setLastSongId] = useState(null);
  const { verseId } = match.params;
  const [lastVerseId, setLastVerseId] = useState(null);

  // fetch data from API when SongPage first loads
  useEffect(() => {
    if (componentStatus === "idle" && !verseId) {
      dispatch(fetchSongPage(songId));
      setLastSongId(songId);
      setComponentStatus("requestSent");
    }
  }, [componentStatus, songId, verseId, dispatch]);

  // fetch data from API when VersePage first loads
  useEffect(() => {
    if (componentStatus === "idle" && verseId) {
      dispatch(fetchSongPage(songId));
      setLastSongId(songId);
      dispatch(fetchVersePage(verseId));
      setLastVerseId(verseId);
      setComponentStatus("requestSent");
    }
  }, [componentStatus, songId, verseId, dispatch]);

  // fetch data from API when arriving at a SongPage from another SongPage
  useEffect(() => {
    if (lastSongId !== songId && !verseId) {
      dispatch(fetchSongPage(songId));
      setLastSongId(songId);
    }
  }, [lastSongId, songId, verseId, dispatch]);

  // fetch data from API when arriving at a VersePage from another VersePage for the same song
  useEffect(() => {
    if (lastSongId === songId && lastVerseId !== verseId) {
      dispatch(fetchVersePage(verseId));
      setLastVerseId(verseId);
    }
  }, [lastSongId, songId, verseId, dispatch]);

  // fetch data from API when arriving at a VersePage from a SongPage for a different song
  useEffect(() => {
    if (lastSongId !== songId && verseId) {
      dispatch(fetchSongPage(songId));
      setLastSongId(songId);
      dispatch(fetchVersePage(verseId));
      setLastVerseId(verseId);
      setComponentStatus("requestSent");
    }
  }, [lastSongId, songId, verseId, dispatch]);

  const asyncRequestStatus = useSelector((state) => state.asyncRequests.status);
  const error = useSelector((state) => state.asyncRequests.errors[-1]);
  const song = useSelector((state) => selectSongById(state, songId));

  let content;

  if (asyncRequestStatus === "pending") {
    content = <div className="loader">Loading...</div>;
  } else if (asyncRequestStatus === "rejected") {
    content = <div>{error}</div>;
  } else if (asyncRequestStatus === "fulfilled" && !song) {
    content = <h2>Song not found!</h2>;
  } else if (asyncRequestStatus === "fulfilled" && song && !verseId) {
    content = (
      <div>
        <SongBanner songId={songId} />
        <SongLayout songId={songId} />
        {/* <SongBreadcrumbs songId={songId} /> */}
      </div>
    );
  } else if (asyncRequestStatus === "fulfilled" && song && verseId) {
    content = (
      <div>
        <SongBanner songId={songId} />
        <VerseLayout songId={songId} verseId={verseId} />
        {/* <SongBreadcrumbs songId={songId} /> */}
      </div>
    );
  }

  return <section>{content}</section>;
};

export default VersePage;
