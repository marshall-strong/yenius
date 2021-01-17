import React from "react";
import { useSelector } from "react-redux";

import { selectArtistById } from "./artistsSlice";

const Description = ({ artistId }) => {
  const artist = useSelector((state) => selectArtistById(state, artistId));
  const markup = artist ? { __html: artist.bio } : null;
  return (
    <div className="MockComponent">
      <h1>Description</h1>
      <span dangerouslySetInnerHTML={markup} />
    </div>
  );
};

export default Description;
