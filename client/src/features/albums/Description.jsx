import React from "react";
import { useSelector } from "react-redux";

import { selectAlbumById } from "./albumsSlice";

const Description = ({ albumId }) => {
  const album = useSelector((state) => selectAlbumById(state, albumId));
  const markup = { __html: album.bio };
  return (
    <div className="MockComponent">
      <h1>Description</h1>
      <span dangerouslySetInnerHTML={markup} />
    </div>
  );
};

export default Description;
