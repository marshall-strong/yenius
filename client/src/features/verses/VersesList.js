import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchVerses } from "./versesAsyncThunks";
import { selectVerseIds, selectVerseById } from "./versesSlice";

const VersesListItem = ({ verseId }) => {
  const verse = useSelector((state) => selectVerseById(state, verseId));
  return (
    <article className="list-item" key={verse.id}>
      <h3>Verse {verse.id}</h3>
      <p>id: {verse.id}</p>
      <p>songId: {verse.songId}</p>
      <p>verseNumber: {verse.verseNumber}</p>
      <p>body: {verse.body}</p>
      <Link to={`/verses/${verse.id}`} className="button muted-button">
        View Verse
      </Link>
    </article>
  );
};

const VersesList = () => {
  const dispatch = useDispatch();
  const verseIds = useSelector(selectVerseIds);
  const versesStatus = useSelector((state) => state.verses.status);
  const error = useSelector((state) => state.verses.error);

  useEffect(() => {
    if (versesStatus === "idle") {
      dispatch(fetchVerses());
    }
  }, [versesStatus, dispatch]);

  let content;

  if (versesStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (versesStatus === "succeeded") {
    content = verseIds.map((verseId) => (
      <VersesListItem key={verseId} verseId={verseId} />
    ));
  } else if (versesStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className="list-list">
      <h2>Verses</h2>
      {content}
    </section>
  );
};

export default VersesList;
