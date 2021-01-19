import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectAlbumById } from "../features/albums/albumsSlice";
import { selectArtistById } from "../features/artists/artistsSlice";
import { selectSongById } from "../features/songs/songsSlice";

import "../assets/stylesheets/Breadcrumbs.scss";

const homeLink = () => <Link to="/" key="0">{` [Home] `}</Link>;

const albumsIndexLink = () => <Link to="/albums" key="1">{` [Albums] `}</Link>;

const albumPageLink = (albumId) => {
  const album = useSelector((state) => selectAlbumById(state, albumId));
  return <Link to={`/albums/${albumId}`} key="2">{` [${album.name}] `}</Link>;
};

const artistsIndexLink = () => (
  <Link to="/artists" key="1">{` [Artists] `}</Link>
);

const artistsListLink = (char) => (
  <Link
    to={`/artists/index/${char}`}
    key="2"
  >{` [${char.toUpperCase()}] `}</Link>
);

const artistPageCharLink = (artistId) => {
  const artist = useSelector((state) => selectArtistById(state, artistId));
  const char = artist.name.toLowerCase().slice(0, 1);
  return (
    <Link
      to={`/artists/index/${char}`}
      key="2"
    >{` [${char.toUpperCase()}] `}</Link>
  );
};

const artistPageLink = (artistId) => {
  const artist = useSelector((state) => selectArtistById(state, artistId));
  return (
    <Link to={`/artists/${artistId}`} key="3">{` [${artist.name}] `}</Link>
  );
};

const songsIndexLink = () => <Link to="/songs" key="1">{` [Songs] `}</Link>;

const songsListLink = (char) => {
  return (
    <Link
      to={`/songs/index/${char}`}
      key="2"
    >{` [${char.toUpperCase()}] `}</Link>
  );
};

const songPageCharLink = (songId) => {
  const song = useSelector((state) => selectSongById(state, songId));
  const char = song.name.toLowerCase().slice(0, 1);
  return (
    <Link
      to={`/songs/index/${char}`}
      key="2"
    >{` [${char.toUpperCase()}] `}</Link>
  );
};

const songPageLink = (songId) => {
  const song = useSelector((state) => selectSongById(state, songId));
  return <Link to={`/songs/${songId}`} key="3">{` [${song.name}] `}</Link>;
};

const Breadcrumbs = ({ match }) => {
  const path = match.path;

  const crumbs = [homeLink()];

  if (path === "/albums") {
    crumbs.push(albumsIndexLink());
  }
  if (path === "/albums/:albumId") {
    crumbs.push(albumsIndexLink());
    crumbs.push(albumPageLink(match.params.albumId));
  }
  if (path === "/artists") {
    crumbs.push(artistsIndexLink());
  }
  if (path === "/artists/index/:char") {
    crumbs.push(artistsIndexLink());
    crumbs.push(artistsListLink(match.params.char));
  }
  if (path === "/artists/:artistId") {
    crumbs.push(artistsIndexLink());
    crumbs.push(artistPageCharLink(match.params.artistId));
    crumbs.push(artistPageLink(match.params.artistId));
  }
  if (path === "/songs") {
    crumbs.push(songsIndexLink());
  }
  if (path === "/songs/index/:char") {
    crumbs.push(songsIndexLink());
    crumbs.push(songsListLink(match.params.char));
  }
  if (path === "/songs/:songId" || path === "/songs/:songId/verses/:verseId") {
    crumbs.push(songsIndexLink());
    crumbs.push(songPageCharLink(match.params.songId));
    crumbs.push(songPageLink(match.params.songId));
  }

  return (
    <footer className="Breadcrumbs">
      <br />
      {crumbs}
      <br />
      <br />
      {/*<h3>Breadcrumbs Examples:</h3>
      <h2> {"[Home] [Albums] [Watch the Throne]"} </h2>
      <h2> {"[Home] [Artists] [K] [Kanye West]"} </h2>
      <h2> {"[Home] [Songs] [N] [No Church in the Wild]"} </h2>
      <br /> */}
    </footer>
  );
};

export default Breadcrumbs;
