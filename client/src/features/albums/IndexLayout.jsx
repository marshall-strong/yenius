import React from "react";

import Breadcrumbs from "../../app/Breadcrumbs";
import IndexList from "./IndexList";

const IndexLayout = ({ match }) => {
  return (
    <section className="IndexLayout">
      <div>
        <IndexList />
        <Breadcrumbs match={match} />
      </div>
    </section>
  );
};

export default IndexLayout;
