import React from "react";
import { useSelector } from "react-redux";
import { selectArtistById } from "./artistsSlice";

const ArtistAbout = ({ artistId }) => {
  const artist = useSelector((state) => selectArtistById(state, artistId));
  return (
    <div className="MockComponent">
      <h1>ArtistAbout</h1>
      {artist.description}
    </div>
  );
};

export default ArtistAbout;
