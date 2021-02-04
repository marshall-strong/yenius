import React from "react";
import { useSelector } from "react-redux";

import { selectArtistById } from "../../features/artists/artistsSlice";

import ThisIsFine from "../../images/this_is_fine.png";
// import "../.././stylesheets/Banner.scss";

const Banner = ({ artistId }) => {
  const artist = useSelector((state) => selectArtistById(state, artistId));
  const entityType = "artist";

  const subjectImage = artist.urlArtist
    ? `url(${artist.urlArtist})`
    : ThisIsFine;
  const styleSubjectImage = {
    backgroundImage: subjectImage,
    // backgroundImage: `url(${artist.urlArtist})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const styleBannerImage = {
    backgroundImage: `url(${artist.urlAlbumBanner})`,
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
              <div className="subjectName">{artist.name}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Loader = ({ artistId }) => {
  const fetchArtistPage = useSelector(
    (state) => state.artists.status.fetchArtistPage
  );
  const asyncRequests = [fetchArtistPage];
  if (asyncRequests.every((status) => status === "fulfilled")) {
    return <Banner artistId={artistId} />;
  } else {
    return <div className="loader" />;
  }
};

export default Loader;
