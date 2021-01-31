import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectVerseById } from "../verses/versesSlice";

import VerseComments from "../verses/VerseComments";

import { logCurrentDomRect } from "../../lib";

const AnnotationsContainer = ({ verseId, selectedVerseRef }) => {
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
      <button
        onClick={(e) => {
          e.preventDefault();
          const element = selectedVerseRef.current;
          logCurrentDomRect(element);
        }}
      >
        log DOMRect of selected verse
      </button>
    </section>
  );
};

export default AnnotationsContainer;
