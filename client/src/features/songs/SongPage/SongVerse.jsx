import React from "react";
import { useSelector } from "react-redux";

import { selectVerseById } from "../../verses/versesSlice";

// https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
const SongVerse = ({ verseId }) => {
  const verse = useSelector((state) => selectVerseById(state, verseId));
  const markup = { __html: verse.body };
  return (
    <p>
      <a href={`/songs/${verse.songId}`} className="referent referent--yellow">
        <span className="SongVerse" dangerouslySetInnerHTML={markup} />
      </a>
    </p>
  );
};

export default SongVerse;
