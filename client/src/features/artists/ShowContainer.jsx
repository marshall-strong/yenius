import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchArtistPage } from "./artistsSliceThunks";
import { fetchArtistComments } from "../comments/commentsSliceThunks";

import { selectArtistById } from "./artistsSlice";

import Banner from "./Banner";
import Breadcrumbs from "../../app/Breadcrumbs";
import ColumnLayout from "./ColumnLayout";
import NotFound from "../../app/pages/NotFound";

import "../../stylesheets/show.scss";
import "../../stylesheets/ShowContainer.scss";

const ShowLayout = ({ artistId, match }) => {
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

const ArtistShowContainer = ({ match }) => {
  const artistId = parseInt(match.params.artistId);
  const artist = useSelector((state) => selectArtistById(state, artistId));
  const [lastArtistFetched, setLastArtistFetched] = useState(null);
  const fetchArtistPageStatus = useSelector(
    (state) => state.artists.status.fetchArtistPage
  );

  let content = <div>ArtistPage component</div>;
  if (!artist && fetchArtistPageStatus === "pending") {
    content = <div className="loader" />;
  }
  if (!artist && fetchArtistPageStatus === "rejected") {
    content = (
      <div>
        <h2>Artist not found!</h2>
        <NotFound />
      </div>
    );
  }
  if (artist && fetchArtistPageStatus === "fulfilled") {
    content = <ShowLayout match={match} artistId={artistId} />;
  }

  const dispatch = useDispatch();
  useEffect(() => {
    if (artistId && lastArtistFetched !== artistId) {
      dispatch(fetchArtistPage(artistId));
      setLastArtistFetched(artistId);
      dispatch(fetchArtistComments(artistId));
    }
  }, [lastArtistFetched, artistId, dispatch]);

  return <section className="ShowContainer">{content}</section>;
};

export default ArtistShowContainer;
