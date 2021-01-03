import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchAlbumsList } from "../albums/albumsAsyncThunks";
import { selectAlbumIds, selectAlbumById } from "../albums/albumsSlice";

const AlbumsListItem = ({ albumId }) => {
  const album = useSelector((state) => selectAlbumById(state, albumId));
  return (
    <article className="list-item" key={album.id}>
      <h3>Album {album.id}</h3>
      <p>id: {album.id}</p>
      <p>title: {album.title}</p>
      <p>name: {album.name}</p>
      <p>releaseDate: {album.releaseDate}</p>
      {/* <p>subjectImgUrl: {album.subjectImgUrl}</p> */}
      <Link to={`/albums/${album.id}`} className="button muted-button">
        View Album
      </Link>
    </article>
  );
};

const AlbumsList = () => {
  const dispatch = useDispatch();
  const [componentStatus, setComponentStatus] = useState("idle");

  useEffect(() => {
    if (componentStatus === "idle") {
      dispatch(fetchAlbumsList());
      setComponentStatus("requestSent");
    }
  }, [componentStatus, dispatch]);

  const asyncRequestStatus = useSelector((state) => state.asyncRequests.status);
  const error = useSelector((state) => state.asyncRequests.errors[-1]);
  const orderedAlbumIds = useSelector(selectAlbumIds);
  let content;

  if (asyncRequestStatus === "pending") {
    content = <div className="loader">Loading...</div>;
  } else if (asyncRequestStatus === "rejected") {
    content = <div>{error}</div>;
  } else if (asyncRequestStatus === "fulfilled") {
    content = orderedAlbumIds.map((albumId) => (
      <AlbumsListItem key={albumId} albumId={albumId} />
    ));
  }

  return (
    <section className="list-list">
      <h2>Albums</h2>
      {content}
    </section>
  );
};

export default AlbumsList;
