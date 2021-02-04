import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchSong,
  fetchSongAlbum,
  fetchSongArtistCredits,
  fetchSongBanner,
  fetchSongDescription,
  fetchSongLyrics,
  fetchSongSampleCredits,
} from "../../features/songs/songsSliceThunks";

import {
  fetchSongComments,
  fetchVerseComments,
} from "../../features/comments/commentsSliceThunks";

import { selectSongById } from "../../features/songs/songsSlice";

import Banner from "../components/SongBanner";
import Breadcrumbs from "../layout/Breadcrumbs";
import ColumnLayout from "../components/SongColumnLayout";
import PageNotFound from "./NotFoundPage";

// import "../../stylesheets/ShowContainer.scss";
// import "../../stylesheets/SongPage.scss";

const ShowLayout = ({ match }) => {
  const songId = parseInt(match.params.songId);
  return (
    <section className="PageLayout">
      <div>
        <Banner songId={songId} />
        <ColumnLayout match={match} />
        <Breadcrumbs match={match} />
      </div>
    </section>
  );
};

const SongShowContainer = ({ match }) => {
  const songId = parseInt(match.params.songId);
  const song = useSelector((state) => selectSongById(state, songId));
  const [lastSongFetched, setLastSongFetched] = useState(null);
  const fetchSongStatus = useSelector((state) => state.songs.status.fetchSong);

  const verseId = parseInt(match.params.verseId);
  const [lastVerseFetched, setLastVerseFetched] = useState(null);

  let content = <div>SongPage component</div>;
  if (!song && fetchSongStatus === "pending") {
    content = <div className="loader" />;
  }
  if (!song && fetchSongStatus === "rejected") {
    content = (
      <div>
        <PageNotFound message={"No Song Found"} />
      </div>
    );
  }
  if (song && fetchSongStatus === "fulfilled") {
    content = <ShowLayout match={match} />;
  }

  const dispatch = useDispatch();
  useEffect(() => {
    if (songId && lastSongFetched !== songId) {
      dispatch(fetchSong(songId));
      setLastSongFetched(songId);
      dispatch(fetchSongAlbum(songId));
      dispatch(fetchSongArtistCredits(songId));
      dispatch(fetchSongBanner(songId));
      dispatch(fetchSongComments(songId));
      dispatch(fetchSongDescription(songId));
      dispatch(fetchSongLyrics(songId));
      dispatch(fetchSongSampleCredits(songId));
    }
  }, [songId, lastSongFetched, dispatch]);

  useEffect(() => {
    if (verseId && lastVerseFetched !== verseId) {
      dispatch(fetchVerseComments(verseId));
      setLastVerseFetched(verseId);
    }
  }, [songId, lastVerseFetched, verseId, dispatch]);

  return <section className="ShowContainer">{content}</section>;
};

export default SongShowContainer;
