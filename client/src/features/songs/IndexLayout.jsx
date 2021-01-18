import React from "react";
import { useSelector } from "react-redux";
import IndexChars from "./IndexChars";
import IndexSongsList from "./IndexSongsList";
import Suggestions from "./Suggestions";
import Breadcrumbs from "../../app/Breadcrumbs";

const IndexLayout = ({ char, match }) => {
  const isFulfilled = (request) => request === "fulfilled";
  const fetchSongsIndexStatus = useSelector(
    (state) => state.songs.status.fetchSongsIndex
  );
  const songsListRequests = [fetchSongsIndexStatus];
  const songsList = songsListRequests.every(isFulfilled) ? (
    <IndexSongsList char={char} />
  ) : (
    <div className="loader" />
  );

  const content = char ? songsList : <Suggestions />;

  return (
    <section className="IndexLayout">
      <div>
        <IndexChars />
        {content}
        <Breadcrumbs match={match} />
      </div>
    </section>
  );
};

export default IndexLayout;
