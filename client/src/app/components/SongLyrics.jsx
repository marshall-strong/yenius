import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectSongById } from "../../features/songs/songsSlice";
import { selectVerseById } from "../../features/verses/versesSlice";

const SelectedVerse = ({ selectedVerseRef, verse }) => {
  return (
    <p id="SelectedVerse" ref={selectedVerseRef}>
      <Link
        to={`/songs/${verse.songId}/verses/${verse.id}`}
        className="referent referent--yellow referent--highlighted"
      >
        <span
          className="SongVerse"
          dangerouslySetInnerHTML={{ __html: verse.body }}
        />
      </Link>
    </p>
  );
};

const LyricsVerse = ({ selectedVerseId, selectedVerseRef, verseId }) => {
  const verse = useSelector((state) => selectVerseById(state, verseId));
  const isSelectedVerse = selectedVerseId === verseId;

  const lyricsVerse = isSelectedVerse ? (
    <SelectedVerse selectedVerseRef={selectedVerseRef} verse={verse} />
  ) : (
    <p>
      <Link
        to={`/songs/${verse.songId}/verses/${verseId}`}
        className="referent referent--yellow"
      >
        <span
          className="SongVerse"
          dangerouslySetInnerHTML={{ __html: verse.body }}
        />
      </Link>
    </p>
  );

  return lyricsVerse;
};

const Lyrics = ({ match, selectedVerseRef }) => {
  const songId = parseInt(match.params.songId);
  const song = useSelector((state) => selectSongById(state, songId));
  if (!song) {
    return null;
  }

  const selectedVerseId = parseInt(match.params.verseId);
  // Fix this...
  if (!(song.verses && song.verses.length > 0)) {
    return (
      <div className="song_body-lyrics">
        <h1>SongLyrics</h1>
        <div>Lyrics unavailable, sorry. Try a Kanye song.</div>
        <br />
      </div>
    );
  }

  const songVerses = song.verses.map((verseId) => (
    <LyricsVerse
      key={verseId}
      selectedVerseId={selectedVerseId}
      selectedVerseRef={selectedVerseRef}
      verseId={verseId}
    />
  ));

  return (
    <div className="song_body-lyrics">
      <h2 className="text_label text_label--gray text_label--x_small_text_size u-top_margin">
        {song.name} Lyrics
      </h2>
      <div className="lyrics">
        <ul>{songVerses}</ul>
      </div>
    </div>
  );
};

const Loader = (props) => {
  const fetchSongLyrics = useSelector(
    (state) => state.songs.status.fetchSongLyrics
  );
  const asyncRequests = [fetchSongLyrics];
  if (asyncRequests.every((status) => status === "fulfilled")) {
    return <Lyrics {...props} />;
  } else {
    return <div className="loader" />;
  }
};

export default Loader;
