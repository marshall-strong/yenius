import React from "react";
import { useSelector } from "react-redux";

import { selectAlbumById } from "../../albums/albumsSlice";

const AlbumAbout = ({ albumId }) => {
  const album = useSelector((state) => selectAlbumById(state, albumId));
  const markup = { __html: album.bio };
  return (
    <div className="MockComponent">
      <h1>AlbumAbout</h1>
      <span dangerouslySetInnerHTML={markup} />
    </div>
  );
}

export default AlbumAbout;
