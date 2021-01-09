import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectSongById } from "./songsSlice";
// import { selectAlbumBySongId } from "../albums/albumsSlice";
// import {
//   selectArtistById,
//   selectPrimaryArtistBySongId,
// } from "../artists/artistsSlice";
// import intersperse from "../../lib";

export const SongByArtistLink = ({ songId }) => {
  const song = useSelector((state) => selectSongById(state, songId));
  // const primaryArtists = selectPrimaryArtistBySongId(songId);
  // const artistNames = primaryArtists.map((artist) => artist.name);
  // const interspersedArtistNames = intersperse(artistNames, ", ", " & ");
  let content;
  if (!song) {
    content = null;
  } else {
    content = <Link to={`/songs/${songId}`}>{song.displayName}</Link>;
  }
  return <div>{content}</div>;
};
