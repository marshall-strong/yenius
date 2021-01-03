import React from "react";
import { useSelector } from "react-redux";

import { selectArtistById } from "../artistsSlice";

import ThisIsFine from "../../../assets/images/this_is_fine.png"
import "../../../assets/stylesheets/Banner.scss";

const ArtistBanner = ({ artistId }) => {
  const artist = useSelector((state) => selectArtistById(state, artistId));
  const entityType = "artist";

  const subjectImage = artist.subjectImgUrl ? `url(${artist.subjectImgUrl})` : ThisIsFine;
  const styleSubjectImage = {
    backgroundImage: subjectImage,
    // backgroundImage: `url(${artist.subjectImgUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  
  const styleBannerImage = {
    backgroundImage: `url(${artist.bannerImgUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  
  return (
    <header className="Banner" style={styleBannerImage}>
      <div className="bannerImgGradient">
        <div className="bannerContent">
          <div className="subjectImg" style={styleSubjectImage}>
            <img src={subjectImage} alt={artist.name} />
          </div>
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

export default ArtistBanner;
