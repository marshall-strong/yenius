import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectAlbumById } from "./albumsSlice";
import { fetchAlbumPage } from "./albumsSliceThunks";
import { fetchAlbumComments } from "../comments/commentsSliceThunks";

import Banner from "./Banner";
import Breadcrumbs from "../../app/layout/Breadcrumbs";
import ColumnLayout from "./ColumnLayout";
import NotFound from "../../app/components/NotFound";

// import "../../stylesheets/show.scss";
// import "../../stylesheets/ShowContainer.scss";

const ShowLayout = ({ albumId, match }) => {
  const isFulfilled = (request) => request === "fulfilled";

  const fetchAlbumPageStatus = useSelector(
    (state) => state.albums.status.fetchAlbumPage
  );
  const bannerRequests = [fetchAlbumPageStatus];
  const banner = bannerRequests.every(isFulfilled) ? (
    <Banner albumId={albumId} />
  ) : (
    <div className="loader" />
  );

  return (
    <section className="PageLayout">
      <div>
        {banner}
        <ColumnLayout albumId={albumId} />
        <Breadcrumbs match={match} />
      </div>
    </section>
  );
};

const AlbumPage = ({ match }) => {
  const albumId = parseInt(match.params.albumId);
  const album = useSelector((state) => selectAlbumById(state, albumId));
  const fetchAlbumPageStatus = useSelector(
    (state) => state.albums.status.fetchAlbumPage
  );
  const [lastAlbumFetched, setLastAlbumFetched] = useState(null);

  let content = <div>AlbumPage component</div>;
  if (!album && fetchAlbumPageStatus === "pending") {
    content = <div className="loader" />;
  } else if (!album && fetchAlbumPageStatus === "rejected") {
    content = (
      <div>
        <h2>Album not found!</h2>
        <NotFound />
      </div>
    );
  } else if (album && fetchAlbumPageStatus === "fulfilled") {
    content = <ShowLayout match={match} albumId={albumId} />;
  }

  const dispatch = useDispatch();
  useEffect(() => {
    if (albumId && lastAlbumFetched !== albumId) {
      dispatch(fetchAlbumPage(albumId));
      setLastAlbumFetched(albumId);
      dispatch(fetchAlbumComments(albumId));
    }
  }, [lastAlbumFetched, albumId, dispatch]);

  return <section className="ShowContainer">{content}</section>;
};

export default AlbumPage;
