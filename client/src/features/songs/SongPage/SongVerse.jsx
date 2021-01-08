import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectVerseById } from "../../verses/versesSlice";

// https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
const SongVerse = ({ verseId }) => {
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

export default SongVerse;
