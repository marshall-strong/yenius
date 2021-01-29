import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectSongById } from "./songsSlice";
import { selectVerseById } from "../verses/versesSlice";

const LyricsVerse = ({ selectedVerseId, verseId }) => {
  let klassName = "referent referent--yellow";
  if (selectedVerseId === verseId) {
    klassName = "referent referent--yellow referent--highlighted";
  }

  const verse = useSelector((state) => selectVerseById(state, verseId));
  const markup = { __html: verse.body };
  return (
    <p>
      <Link
        to={`/songs/${verse.songId}/verses/${verseId}`}
        className={klassName}
      >
        <span className="SongVerse" dangerouslySetInnerHTML={markup} />
      </Link>
    </p>
  );
};

const Lyrics = ({ selectedVerseId, songId }) => {
  const song = useSelector((state) => selectSongById(state, songId));
  if (!song) {
    return null;
  }

  if (!(song.verses && song.verses.length > 0)) {
    return (
      <div className="song_body-lyrics">
        <h1>SongLyrics</h1>
        <div>Lyrics unavailable, sorry. Try a Kanye song.</div>
        <br />
      </div>
    );
  }

  const lyrics = song.verses.map((verseId) => (
    <LyricsVerse
      key={verseId}
      selectedVerseId={selectedVerseId}
      verseId={verseId}
    />
  ));
  return (
    <div className="song_body-lyrics">
      <h2 className="text_label text_label--gray text_label--x_small_text_size u-top_margin">
        {song.name} Lyrics
      </h2>
      <div className="lyrics">
        <ul>{lyrics}</ul>
      </div>
    </div>
  );
};

const Loader = ({ selectedVerseId, songId }) => {
  const fetchSongLyrics = useSelector(
    (state) => state.songs.status.fetchSongLyrics
  );
  const asyncRequests = [fetchSongLyrics];
  if (asyncRequests.every((status) => status === "fulfilled")) {
    return <Lyrics selectedVerseId={selectedVerseId} songId={songId} />;
  } else {
    return <div className="loader" />;
  }
};

export default Loader;
