import React from "react";

import Breadcrumbs from "../../app/Breadcrumbs";
import IndexChars from "./IndexChars";
import IndexList from "./IndexList";
import TopSongs from "./TopSongs";

const Suggestions = () => {
  return (
    <div>
      <h1>Suggestions</h1>
      How about these songs?
      <TopSongs />
    </div>
  );
};

const IndexLayout = ({ char, match }) => {
  const content = char ? <IndexList char={char} /> : <Suggestions />;
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
