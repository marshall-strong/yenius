import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  selectAlbumIds,
  selectAlbumById,
} from "../../features/albums/albumsSlice";

const AlbumsListItem = ({ albumId }) => {
  const album = useSelector((state) => selectAlbumById(state, albumId));

  if (album.name === "Samples & Interpolations") {
    return null;
  }

  const imageStyle = {
    backgroundImage: `url(${album.urlAlbumCover})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const coverImg = <div className="subjectImg" style={imageStyle} />;

  return (
    <article className="list-item" key={album.id}>
      <Link to={`/albums/${album.id}`}>
        {coverImg}
        <h3>
          {album.name} ({album.releaseDate.slice(0, 4)})
        </h3>
      </Link>
    </article>
  );
};

const IndexList = () => {
  const orderedAlbumIds = useSelector(selectAlbumIds);
  const content = orderedAlbumIds.map((albumId) => (
    <AlbumsListItem key={albumId} albumId={albumId} />
  ));

  return (
    <section className="list-list">
      <h1>Kanye West Albums</h1>
      {content}
    </section>
  );
};

const Loader = () => {
  const fetchAlbumsList = useSelector(
    (state) => state.albums.status.fetchAlbumsList
  );
  const asyncRequests = [fetchAlbumsList];
  if (asyncRequests.every((status) => status === "fulfilled")) {
    return <IndexList />;
  } else {
    return <div className="loader" />;
  }
};

export default Loader;
