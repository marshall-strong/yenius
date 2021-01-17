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
} from "./songsAsyncThunks";
import {
  fetchSongComments,
  fetchVerseComments,
} from "../comments/commentsAsyncThunks";

import { selectSongById } from "./songsSlice";
import { selectVerseById } from "../verses/versesSlice";

import PageLayout from "./PageLayout";
import NotFound from "../../NotFound";

import "../../assets/stylesheets/SongPage.scss";

const SongPage = ({ match }) => {
  const songId = parseInt(match.params.songId);
  const song = useSelector((state) => selectSongById(state, songId));
  const [lastSongFetched, setLastSongFetched] = useState(null);
  const fetchSongStatus = useSelector((state) => state.songs.status.fetchSong);

  const verseId = parseInt(match.params.verseId);
  const verse = useSelector((state) => selectVerseById(state, verseId));
  const [lastVerseFetched, setLastVerseFetched] = useState(null);

  let content = <div>SongPage component</div>;
  if (!song && fetchSongStatus === "pending") {
    content = <div className="loader" />;
  }
  if (!song && fetchSongStatus === "rejected") {
    content = (
      <div>
        <h2>Song not found!</h2>
        <NotFound />
      </div>
    );
  }
  if (song && fetchSongStatus === "fulfilled" && !verse) {
    content = <PageLayout match={match} showVerse={false} />;
  }

  if (song && fetchSongStatus === "fulfilled" && verse) {
    content = <PageLayout match={match} showVerse={true} />;
  }

  const dispatch = useDispatch();
  useEffect(() => {
    if (lastSongFetched !== songId) {
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
  }, [lastSongFetched, songId, dispatch]);

  useEffect(() => {
    if (verseId && lastVerseFetched !== verseId) {
      dispatch(fetchVerseComments(verseId));
      setLastVerseFetched(verseId);
    }
  }, [songId, lastVerseFetched, verseId, dispatch]);

  return <section>{content}</section>;
};

export default SongPage;
