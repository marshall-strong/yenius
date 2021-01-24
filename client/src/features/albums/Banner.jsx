import React from "react";
import { useSelector } from "react-redux";

import { selectAlbumById } from "./albumsSlice";
import ArtistLinks from "../artists/ArtistLinks";
import { printDate } from "../../lib";

import "../../../assets/stylesheets/Banner.scss";

const Banner = ({ albumId }) => {
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
    artistLinks = <ArtistLinks artistIds={album.artistsPrimary} />;
    releaseDate = <div>Released {printDate(album.releaseDate)}</div>;
  }

  const styleBannerImage = {
    backgroundImage: `url(${album.urlAlbumBanner})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const styleSubjectImage = {
    backgroundImage: `url(${album.urlAlbumCover})`,
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

const Loader = ({ albumId }) => {
  const fetchAlbumPage = useSelector(
    (state) => state.albums.status.fetchAlbumPage
  );
  const asyncRequests = [fetchAlbumPage];
  if (asyncRequests.every((status) => status === "fulfilled")) {
    return <Banner albumId={albumId} />;
  } else {
    return <div className="loader" />;
  }
};

export default Loader;
