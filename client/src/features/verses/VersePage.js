import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectVerseById } from "../verses/versesSlice";

const VersePage = ({ match }) => {
  const { verseId } = match.params;

  const verse = useSelector((state) => selectVerseById(state, verseId));

  if (!verse) {
    return (
      <section>
        <h2>Verse not found!</h2>
        <Link to={`/verses`} className="button muted-button">
          Back to Verses List
        </Link>
      </section>
    );
  }

  return (
    <section>
      <h2>Verse {verse.id}</h2>
      <p>id: {verse.id}</p>
      <p>songId: {verse.songId}</p>
      <p>verseNumber: {verse.verseNumber}</p>
      <p>body: {verse.body}</p>
      <Link to={`/verses`} className="button muted-button">
        Back to Verses List
      </Link>
    </section>
  );
};

export default VersePage;
