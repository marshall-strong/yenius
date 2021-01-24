import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchArtistPage } from "./artistsAsyncThunks";
import { fetchArtistComments } from "../comments/commentsAsyncThunks";

import { selectArtistById } from "./artistsSlice";

import ArtistShowLayout from "./ShowLayout";
import NotFound from "../../NotFound";

import "../.././stylesheets/show.scss";

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
    content = <ArtistShowLayout match={match} artistId={artistId} />;
  }

  const dispatch = useDispatch();
  useEffect(() => {
    if (artistId && lastArtistFetched !== artistId) {
      dispatch(fetchArtistPage(artistId));
      setLastArtistFetched(artistId);
      dispatch(fetchArtistComments(artistId));
    }
  }, [lastArtistFetched, artistId, dispatch]);

  return <section>{content}</section>;
};

export default ArtistShowContainer;
