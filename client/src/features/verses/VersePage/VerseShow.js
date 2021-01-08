import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectVerseById } from "../versesSlice";

const VerseShow = ({ verseId }) => {
  const verse = useSelector((state) => selectVerseById(state, verseId));
  if (!verse) {
    return null;
  }
  const markup = { __html: verse.body };
  return (
    <section>
      <div dangerouslySetInnerHTML={markup} />
      <Link to={`/songs/${verse.songId}`} className="button muted-button">
        Back to SongPage
      </Link>
    </section>
  );
};

export default VerseShow;
