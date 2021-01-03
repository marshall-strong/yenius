import React from "react";
import { useSelector } from "react-redux";
import { selectSongById } from "../songsSlice";
import SongVerse from "./SongVerse"

const SongLyrics = ({ songId }) => {
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

  const songVerses = song.verses.map(verseId => (
    <SongVerse key={verseId} verseId={verseId} />
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
}

export default SongLyrics;
