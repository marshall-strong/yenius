import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectVerseById } from "../verses/versesSlice";

import VerseComments from "../verses/VerseComments";

const AnnotationsContainer = ({ verseId }) => {
  const verse = useSelector((state) => selectVerseById(state, verseId));
  if (!verse) {
    return null;
  }
  const markup = { __html: verse.body };
  return (
    <section>
      <h3>Yenius Annotations</h3>
      <div dangerouslySetInnerHTML={markup} />
      <VerseComments verseId={verseId} />
      <Link to={`/songs/${verse.songId}`}> Close Annotations </Link>
    </section>
  );
};

export default AnnotationsContainer;
