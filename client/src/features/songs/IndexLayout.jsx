import React from "react";

import IndexChars from "./IndexChars";
import IndexList from "./IndexList";
import Suggestions from "./Suggestions";
import Breadcrumbs from "../../app/Breadcrumbs";

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
