import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSongById } from "../songsSlice";
import { selectVerseById } from "../../verses/versesSlice";

const LyricsVerse = ({ verseId }) => {
  const verse = useSelector((state) => selectVerseById(state, verseId));
  const markup = { __html: verse.body };
  return (
    <p>
      <Link
        to={`/songs/${verse.songId}/verses/${verseId}`}
        className="referent referent--yellow"
      >
        <span className="SongVerse" dangerouslySetInnerHTML={markup} />
      </Link>
    </p>
  );
};

const Lyrics = ({ songId }) => {
  const song = useSelector((state) => selectSongById(state, songId));

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
    <LyricsVerse key={verseId} verseId={verseId} />
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

export default Lyrics;
