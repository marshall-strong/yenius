import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAlbumBySongId } from "../../albums/albumsSlice";
import { selectSongById } from "../songsSlice";
import { InterspersedArtistLinks } from "../../artists/ArtistsLinks";
import { mergeArrays } from "../../../lib";
import "../../../assets/stylesheets/SongBanner.scss";

const Banner = ({ songId }) => {
  const song = useSelector((state) => selectSongById(state, songId));
  const album = useSelector((state) => selectAlbumBySongId(state, songId));

  if (!song || !album) {
    return null;
  }
  if (!song.artistCredits || !album.artistCredits) {
    return null;
  }

  let albumLink;
  if (album && album.name === "Samples & Interpolations") {
    albumLink = "Samples & Interpolations";
  } else if (album) {
    albumLink = <a href={`/albums/${album.id}`}>{album.name}</a>;
  }

  const name = song.name;

  let primaryArtists;
  const primaryArtistIds = mergeArrays(
    song.artistCredits["PRIMARY_ARTIST"],
    album.artistCredits["PRIMARY_ARTIST"]
  );
  if (primaryArtistIds.length > 0) {
    primaryArtists = <InterspersedArtistLinks artistIds={primaryArtistIds} />;
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
        <InterspersedArtistLinks artistIds={featuredArtistIds} />
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
        <InterspersedArtistLinks artistIds={producerArtistIds} />
      </span>
    );
  }

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
              {/* <div className="entityType">{entityType}</div> */}
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

export default Banner;
