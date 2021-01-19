import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectAlbumBySongId } from "../albums/albumsSlice";
import { selectSongById } from "./songsSlice";

import { mergeArrays } from "../../lib";

import ArtistLinks from "../artists/ArtistLinks";

import "../../assets/stylesheets/SongBanner.scss";

const Banner = ({ songId }) => {
  const song = useSelector((state) => selectSongById(state, songId));
  const album = useSelector((state) => selectAlbumBySongId(state, songId));

  if (!song || !song.artistCredits || !album || !album.artistCredits) {
    return null;
  }

  const name = song.name;

  let primaryArtists;
  const primaryArtistIds = mergeArrays(
    song.artistCredits["PRIMARY_ARTIST"],
    album.artistCredits["PRIMARY_ARTIST"]
  );
  if (primaryArtistIds.length > 0) {
    primaryArtists = <ArtistLinks artistIds={primaryArtistIds} />;
  }

  let featuredArtists;
  const featuredArtistIds = mergeArrays(
    song.artistCredits["FEATURED_ARTIST"],
    album.artistCredits["FEATURED_ARTIST"]
  );
  if (featuredArtistIds.length > 0) {
    featuredArtists = (
      <span>
        {"Featuring "}
        <ArtistLinks artistIds={featuredArtistIds} />
      </span>
    );
  }

  let producers;
  const producerArtistIds = mergeArrays(
    song.artistCredits["PRODUCER"],
    album.artistCredits["PRODUCER"]
  );
  if (producerArtistIds.length > 0) {
    producers = (
      <span>
        {"Produced by "}
        <ArtistLinks artistIds={producerArtistIds} />
      </span>
    );
  }

  const albumLink =
    album.name === "Samples & Interpolations" ? (
      <span>{"Samples & Interpolations"}</span>
    ) : (
      <Link to={`/albums/${album.id}`}>{album.name}</Link>
    );

  const styleBannerImage = {
    backgroundImage: `url(${song.urlAlbumBanner})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const styleSubjectImage = {
    backgroundImage: `url(${song.urlAlbumCover})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <header className="Banner" style={styleBannerImage}>
      <div className="bannerImgGradient">
        <div className="bannerContent">
          <div className="subjectImg" style={styleSubjectImage} />
          <div className="textContainer">
            <div className="bannerText">
              <div className="subjectName yellow">{name}</div>
              <div className="subjectArtist">{primaryArtists}</div>
              <div className="songFeaturedArtists metadata">
                {featuredArtists}
              </div>
              <div className="songProducers metadata">{producers}</div>
              <div className="songAlbum metadata">Album&nbsp;{albumLink}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Loader = ({ songId }) => {
  const fetchSongArtistCredits = useSelector(
    (state) => state.songs.status.fetchSongArtistCredits
  );
  const fetchSongBannerStatus = useSelector(
    (state) => state.songs.status.fetchSongBanner
  );
  const asyncRequests = [fetchSongArtistCredits, fetchSongBannerStatus];
  if (asyncRequests.every((status) => status === "fulfilled")) {
    return <Banner songId={songId} />;
  } else {
    return <div className="loader" />;
  }
};

export default Loader;
