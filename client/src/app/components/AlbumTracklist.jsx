import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectAlbumById } from "../../features/albums/albumsSlice";
import { selectSongById } from "../../features/songs/songsSlice";

import ArtistLinks from "../../app/components/ArtistLinks";

import DownChevron from "../../images/icon-chevron_down.png";
import UpChevron from "../../images/icon-chevron_up.png";

const TracklistRow = ({ songId }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () =>
    expanded ? setExpanded(false) : setExpanded(true);

  const styleClass = expanded ? "track-expanded-true" : "track-expanded-false";
  const arrow = expanded ? (
    <img height="24px" width="24px" src={UpChevron} alt="up_chevron" />
  ) : (
    <img height="24px" width="24px" src={DownChevron} alt="down_chevron" />
  );

  const song = useSelector((state) => selectSongById(state, songId));

  let featuredArtists;
  if (song.artistsFeatured && song.artistsFeatured.length > 0) {
    featuredArtists = <ArtistLinks artistIds={song.artistsFeatured} />;
  }

  let producers;
  if (song.artistsProducers && song.artistsProducers.length > 0) {
    producers = <ArtistLinks artistIds={song.artistsProducers} />;
  }

  return (
    <div className="TracklistRow" key={songId}>
      <div className="track-container">
        <div className="track-align-left">
          <div className="track-track_number">{song.trackNumber}</div>

          <div className="track-content">
            <Link to={`/songs/${songId}`}>
              <div className="track-heading">
                <span className="track-name">{song.nameFt} </span>
                <span className="track-text-gray">Lyrics</span>
              </div>
            </Link>
            <div className="track-details">
              <div className={styleClass}>
                <div className="track-credits">
                  <div className="track-credits-feature">
                    <span className="track-text-gray">
                      {featuredArtists ? "Featuring " : null} {featuredArtists}
                    </span>
                  </div>
                  <div className="track-credits-production">
                    <span className="track-text-gray">
                      {producers ? "Produced by " : null} {producers}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="track-align-right">
          <div className="track-expand_arrow">
            <div onClick={toggleExpanded}>{arrow}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tracklist = ({ albumId }) => {
  const album = useSelector((state) => selectAlbumById(state, albumId));
  let tracks;
  if (album.songs) {
    tracks = album.songs.map((songId) => (
      <TracklistRow key={songId} songId={songId} />
    ));
  }

  return (
    <div className="Tracklist">
      <div className="tracklist-header">{album.name} Tracklist </div>
      <div className="tracklist-rows">{tracks}</div>
    </div>
  );
};

const Loader = ({ albumId }) => {
  const fetchAlbumPage = useSelector(
    (state) => state.albums.status.fetchAlbumPage
  );
  const asyncRequests = [fetchAlbumPage];
  if (asyncRequests.every((status) => status === "fulfilled")) {
    return <Tracklist albumId={albumId} />;
  } else {
    return <div className="loader" />;
  }
};

export default Loader;
