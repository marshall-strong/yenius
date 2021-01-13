import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSong,
  fetchSongAlbum,
  fetchSongArtistCredits,
  fetchSongBanner,
  fetchSongComments,
  fetchSongDescription,
  fetchSongLyrics,
  fetchSongSampleCredits,
} from "../songsAsyncThunks";
import { fetchVerseAnnotations } from "../../verses/versesAsyncThunks";
import { selectSongById } from "../songsSlice";
import { selectVerseById } from "../../verses/versesSlice";
import PageLayout from "./PageLayout";
import NotFound from "../../../NotFound";
import "../../../assets/stylesheets/SongShow.scss";

const ShowSong = ({ match }) => {
  const songId = parseInt(match.params.songId);
  const verseId = parseInt(match.params.verseId);

  const song = useSelector((state) => selectSongById(state, songId));
  const verse = useSelector((state) => selectVerseById(state, verseId));

  const fetchSongStatus = useSelector((state) => state.songs.status.fetchSong);

  const [lastSongFetched, setLastSongFetched] = useState(null);
  const [lastVerseFetched, setLastVerseFetched] = useState(null);

  let content;
  if (!song || fetchSongStatus === "pending") {
    content = <div className="loader" />;
  }
  if (!song || fetchSongStatus === "rejected") {
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
  // fetch data from API
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
      dispatch(fetchVerseAnnotations(verseId));
      setLastVerseFetched(verseId);
    }
  }, [songId, lastVerseFetched, verseId, dispatch]);

  return content;
};

export default ShowSong;
