import React from "react";

import Banner from "./Banner";
import ColumnLayout from "./ColumnLayout";
import Breadcrumbs from "../../app/Breadcrumbs";

const ShowLayout = ({ match }) => {
  const songId = parseInt(match.params.songId);
  return (
    <section className="PageLayout">
      <div>
        <Banner songId={songId} />
        <ColumnLayout match={match} />
        <Breadcrumbs match={match} />
      </div>
    </section>
  );
};

export default ShowLayout;
