import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectSongById } from "./songsSlice";
import { selectVerseById } from "../verses/versesSlice";

const SelectedVerse = ({ setClientRect, verse }) => {
  return (
    <p
      id="SelectedVerse"
      ref={(element) => {
        if (!element) return;
        console.log("initial width: ", element.getBoundingClientRect().width);
        let prevValue = JSON.stringify(element.getBoundingClientRect());
        const start = Date.now();
        const handle = setInterval(() => {
          let nextValue = JSON.stringify(element.getBoundingClientRect());
          if (nextValue === prevValue) {
            clearInterval(handle);
            console.log(`width stopped changin in ${Date.now() - start} ms.`);
            console.log("final width: ", element.getBoundingClientRect().width);
            console.log("");
            const domRect = element.getBoundingClientRect();
            console.log("domRect = element.getBoundingClientRect();");
            console.log(`domRect.left: ${domRect.x}`);
            console.log(`domRect.width: ${domRect.width}`);
            console.log(`domRect.right: ${domRect.right}`);
            console.log(`domRect.top: ${domRect.y}`);
            console.log(`domRect.height: ${domRect.height}`);
            console.log(`domRect.bottom: ${domRect.bottom}`);
          } else {
            prevValue = nextValue;
          }
        }, 100);
      }}
    >
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

const LyricsVerse = ({ selectedVerseId, setClientRect, verseId }) => {
  const verse = useSelector((state) => selectVerseById(state, verseId));
  const isSelectedVerse = selectedVerseId === verseId;

  const lyricsVerse = isSelectedVerse ? (
    <SelectedVerse verse={verse} setClientRect={setClientRect} />
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
