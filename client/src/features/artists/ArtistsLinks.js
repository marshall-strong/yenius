import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { intersperse } from "../../lib";
import { selectArtistById } from "./artistsSlice";

export const ArtistLink = ({ artistId }) => {
  const artist = useSelector((state) => selectArtistById(state, artistId));
  return <Link to={`/artists/${artist.id}`}>{artist.name}</Link>;
};

export const InterspersedArtistLinks = ({ artistIds }) => {
  if (!artistIds) {
    return null;
  }
  const artistLinks = artistIds.map((artistId) => (
    <ArtistLink key={artistId} artistId={artistId} />
  ));
  return intersperse(artistLinks, ", ", " & ");
};
