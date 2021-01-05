import React from "react";
import { useSelector } from "react-redux";

import { selectAlbumById } from "../../albums/albumsSlice";
import { selectSongById } from "../songsSlice";
import { InterspersedArtistLinks } from "../../artists/ArtistsLinks";

import "../../../assets/stylesheets/SongBanner.scss";

const SongBanner = ({ songId }) => {
  const song = useSelector((state) => selectSongById(state, songId));
  const album = useSelector((state) => selectAlbumById(state, song.albumId));
  let albumLink; 
  if (album && album.name === "Samples & Interpolations") {
    albumLink = "Samples & Interpolations";
  } else if (album) {
    albumLink = <a href={`/albums/${album.id}`}>{album.name}</a>;
  }

  // const entityType = "song";
  const name = song.name;
  const artists = <InterspersedArtistLinks artistIds={song.artistsPrimary} />;

  let featured;
  if (song.artistsFeatured && song.artistsFeatured.length > 0) {
    featured = (
      <span>
        {"Featuring "}
        <InterspersedArtistLinks artistIds={song.artistsFeatured} />
      </span>
    );
  }

  let producers;
  if (song.artistsProducers && song.artistsProducers.length > 0) {
    producers = (
      <span>
        {"Produced by "}
        <InterspersedArtistLinks artistIds={song.artistsProducers} />
      </span>
    );
  }

  const styleBannerImage = {
    backgroundImage: `url(${song.bannerImgUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const styleSubjectImage = {
    backgroundImage: `url(${song.subjectImgUrl})`,
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
              <div className="subjectArtist">{artists}</div>
              <div className="songFeaturedArtists" className="metadata">
                {featured}
              </div>
              <div className="songProducers" className="metadata">
                {producers}
              </div>
              <div className="songAlbum" className="metadata">
                Album&nbsp;{albumLink}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SongBanner;
