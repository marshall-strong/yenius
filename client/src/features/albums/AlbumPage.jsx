import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAlbumPage } from "./albumsAsyncThunks";
import { fetchAlbumComments } from "../comments/commentsAsyncThunks";
import { selectAlbumById } from "./albumsSlice";

import PageLayout from "./PageLayout";
import NotFound from "../../NotFound";

import "../../assets/stylesheets/show.scss";

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
    content = <PageLayout albumId={albumId} />;
  }

  const dispatch = useDispatch();
  useEffect(() => {
    if (albumId && lastAlbumFetched !== albumId) {
      dispatch(fetchAlbumPage(albumId));
      setLastAlbumFetched(albumId);
      dispatch(fetchAlbumComments(albumId));
    }
  }, [lastAlbumFetched, albumId, dispatch]);

  return <section>{content}</section>;
};

export default AlbumPage;
