import React from "react";
import { useSelector } from "react-redux";
import IndexChars from "./IndexChars";
import IndexList from "./IndexList";
import Suggestions from "./Suggestions";
import Breadcrumbs from "../../app/Breadcrumbs";

const IndexLayout = ({ char, match }) => {
  const isFulfilled = (request) => request === "fulfilled";
  const fetchArtistsIndexStatus = useSelector(
    (state) => state.artists.status.fetchArtistsIndex
  );
  const artistsListRequests = [fetchArtistsIndexStatus];
  const artistsList = artistsListRequests.every(isFulfilled) ? (
    <IndexList char={char} />
  ) : (
    <div className="loader" />
  );

  const content = char ? artistsList : <Suggestions />;

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
