import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchArtistPage } from "../artistsAsyncThunks";
import { selectArtistById } from "../artistsSlice";

import ArtistBanner from "./ArtistBanner";
import ArtistLayout from "./ArtistLayout";
// import ArtistBreadcrumbs from "./ArtistBreadcrumbs";

import "../../../assets/stylesheets/show.scss";

const ArtistPage = ({ match }) => {
  const dispatch = useDispatch();
  const [componentStatus, setComponentStatus] = useState("idle");
  const { artistId } = match.params;

  useEffect(() => {
    if (componentStatus === "idle") {
      dispatch(fetchArtistPage(artistId));
      setComponentStatus("requestSent");
    }
  }, [componentStatus, artistId, dispatch]);

  const asyncRequestStatus = useSelector((state) => state.asyncRequests.status);
  const error = useSelector((state) => state.asyncRequests.errors[-1]);
  const artist = useSelector((state) => selectArtistById(state, artistId));

  let content;

  if (asyncRequestStatus === "pending") {
    content = <div className="loader">Loading...</div>;
  } else if (asyncRequestStatus === "rejected") {
    content = <div>{error}</div>;
  } else if (asyncRequestStatus === "fulfilled" && !artist) {
    content = <h2>Artist not found!</h2>;
  } else if (asyncRequestStatus === "fulfilled" && artist) {
    content = (
      <div>
        <ArtistBanner artistId={artistId} />
        <ArtistLayout artistId={artistId} />
        {/* <ArtistBreadcrumbs artistId={artistId} /> */}
      </div>
    );
  }

  return <section>{content}</section>;
};

export default ArtistPage;
