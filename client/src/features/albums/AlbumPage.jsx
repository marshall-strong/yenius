import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAlbumPage } from "./albumsAsyncThunks";
import { fetchAlbumComments } from "../comments/commentsAsyncThunks";
import { selectAlbumById } from "./albumsSlice";

import AlbumBanner from "./AlbumBanner";
import AlbumLayout from "./AlbumLayout";
// import AlbumBreadcrumbs from "./AlbumBreadcrumbs";

import "../../assets/stylesheets/show.scss";

const AlbumPage = ({ match }) => {
  const albumId = parseInt(match.params.albumId);
  const album = useSelector((state) => selectAlbumById(state, albumId));
  const dispatch = useDispatch();
  const [componentStatus, setComponentStatus] = useState("idle");

  useEffect(() => {
    if (componentStatus === "idle") {
      dispatch(fetchAlbumPage(albumId));
      setComponentStatus("requestSent");
    }
  }, [componentStatus, albumId, dispatch]);

  const asyncRequestStatus = useSelector((state) => state.asyncRequests.status);
  const error = useSelector((state) => state.asyncRequests.errors[-1]);

  let content;

  if (asyncRequestStatus === "pending") {
    content = <div className="loader">Loading...</div>;
  } else if (asyncRequestStatus === "rejected") {
    content = <div>{error}</div>;
  } else if (asyncRequestStatus === "fulfilled" && !album) {
    content = <h2>Album not found!</h2>;
  } else if (asyncRequestStatus === "fulfilled" && album) {
    content = (
      <div>
        <AlbumBanner albumId={albumId} />
        <AlbumLayout albumId={albumId} />
        {/* <AlbumBreadcrumbs albumId={albumId} /> */}
      </div>
    );
  }

  return <section>{content}</section>;
};

export default AlbumPage;
