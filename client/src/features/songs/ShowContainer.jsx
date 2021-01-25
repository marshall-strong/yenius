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

import SongShowLayout from "./ShowLayout";
import NotFound from "../../NotFound";

import "../.././stylesheets/SongPage.scss";

const ShowContainer = ({ match }) => {
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
        <h2>Song not found!</h2>
        <NotFound />
      </div>
    );
  }
  if (song && fetchSongStatus === "fulfilled") {
    content = <SongShowLayout match={match} />;
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

  return <section>{content}</section>;
};

export default ShowContainer;
