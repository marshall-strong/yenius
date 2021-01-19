import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectVerseById } from "../verses/versesSlice";
import VerseComments from "../verses/VerseComments";

const VerseAnnotations = ({ verseId }) => {
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
      <Link to={`/songs/${verse.songId}`} className="button muted-button">
        Back to SongPage
      </Link>
    </section>
  );
};

export default VerseAnnotations;

// const Loader = ({ verseId }) => {
//   const fetchVerseComments = useSelector(
//     (state) => state.comments.status.fetchVerseComments
//   );
//   const asyncRequests = [fetchVerseComments];
//   if (asyncRequests.every((status) => status === "fulfilled")) {
//     return <SongComments songId={songId} />;
//   } else {
//     return <div className="loader" />;
//   }
// };

// export default Loader;
