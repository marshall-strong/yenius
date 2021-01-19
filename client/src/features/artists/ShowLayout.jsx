import React from "react";
import { useSelector } from "react-redux";

import Banner from "./Banner";
import ColumnLayout from "./ColumnLayout";
import Breadcrumbs from "../../app/Breadcrumbs";

const ArtistShowLayout = ({ artistId, match }) => {
  return (
    <section className="PageLayout">
      <div>
        <Banner artistId={artistId} />
        <ColumnLayout artistId={artistId} />
        <Breadcrumbs match={match} />
      </div>
    </section>
  );
};

export default ArtistShowLayout;
