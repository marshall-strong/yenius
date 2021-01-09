import React from "react";
import { useSelector } from "react-redux";

import { selectAlbumById } from "../albumsSlice";
import { InterspersedArtistLinks } from "../../artists/ArtistsLinks";
import { printDate } from "../../../lib";

import "../../../assets/stylesheets/Banner.scss";

const AlbumBanner = ({ albumId }) => {
  const album = useSelector((state) => selectAlbumById(state, albumId));

  const entityType = "album";
  const name = album.name;

  let artistLinks;
  let releaseDate;

  // Exceptions for Samples & Interpolations...
  if (name === "Samples & Interpolations") {
    artistLinks = "Various Artists";
    releaseDate = "Various Release Dates";
  } else if (album.artistsPrimary) {
    artistLinks = <InterspersedArtistLinks artistIds={album.artistsPrimary} />;
    releaseDate = <div>Released {printDate(album.releaseDate)}</div>;
  }

  const styleBannerImage = {
    backgroundImage: `url(${album.bannerImgUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const styleSubjectImage = {
    backgroundImage: `url(${album.subjectImgUrl})`,
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
              <div className="entityType">{entityType}</div>
              <div className="subjectName">{name}</div>
              <div className="subjectArtist">{artistLinks}</div>
              <div className="metadata">{releaseDate}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AlbumBanner;
