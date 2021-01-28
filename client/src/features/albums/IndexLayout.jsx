import React from "react";

import Breadcrumbs from "../../app/Breadcrumbs";
import IndexList from "./IndexList";
import TopAlbums from "./TopAlbums";

const Suggestions = () => {
  return (
    <div>
      <h1>Kanye West Albums</h1>
      <TopAlbums />
    </div>
  );
};

const IndexLayout = ({ match }) => {
  return (
    <section className="IndexLayout">
      <div>
        <Suggestions />
        {/* <IndexList /> */}
        <Breadcrumbs match={match} />
      </div>
    </section>
  );
};

export default IndexLayout;
