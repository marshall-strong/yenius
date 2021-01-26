import React from "react";

import Breadcrumbs from "../../app/Breadcrumbs";
import IndexList from "./IndexList";
import Suggestions from "./Suggestions";

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
