import React from "react";
import { useSelector } from "react-redux";
import { selectAlbumBySongId } from "../../albums/albumsSlice";
import { selectSongById } from "../songsSlice";
import { InterspersedArtistLinks } from "../../artists/ArtistsLinks";
import { SongByArtistLink } from "../SongLinks";
import { printDate } from "../../../lib";

export const PrimaryArtists = ({ songId }) => {
  const song = useSelector((state) => selectSongById(state, songId));
  if (!song.artistCredits) {
    return null;
  }
  const primaryArtistIds = song.artistCredits["PRIMARY_ARTIST"];
  if (primaryArtistIds.length === 0) {
    return null;
  }
  const linksToPrimaryArtists = (
    <InterspersedArtistLinks artistIds={primaryArtistIds} />
  );
  return (
    <div className="metadata_unit metadata_unit--table_row">
      <span className="metadata_unit-label">Primary Artists</span>
      <span className="metadata_unit-info">{linksToPrimaryArtists}</span>
    </div>
  );
};

export const FeaturedArtists = ({ songId }) => {
  const song = useSelector((state) => selectSongById(state, songId));
  if (!song.artistCredits) {
    return null;
  }
  const featuredArtistIds = song.artistCredits["FEATURED_ARTIST"];
  if (featuredArtistIds.length === 0) {
    return null;
  }
  const linksToFeaturedArtists = (
    <InterspersedArtistLinks artistIds={featuredArtistIds} />
  );
  return (
    <div className="metadata_unit metadata_unit--table_row">
      <span className="metadata_unit-label">Featured Artists</span>
      <span className="metadata_unit-info">{linksToFeaturedArtists}</span>
    </div>
  );
};

export const ProductionArtists = ({ songId }) => {
  const song = useSelector((state) => selectSongById(state, songId));
  if (!song.artistCredits) {
    return null;
  }
  const productionArtistIds = song.artistCredits["PRODUCER"];
  if (productionArtistIds.length === 0) {
    return null;
  }
  const linksToProductionArtists = (
    <InterspersedArtistLinks artistIds={productionArtistIds} />
  );
  return (
    <div className="metadata_unit metadata_unit--table_row">
      <span className="metadata_unit-label">Production Artists</span>
      <span className="metadata_unit-info">{linksToProductionArtists}</span>
    </div>
  );
};

export const ReleaseDate = ({ songId }) => {
  const album = useSelector((state) => selectAlbumBySongId(state, songId));
  if (!album || !album.releaseDate) {
    return null;
  }
  return (
    <div className="metadata_unit metadata_unit--table_row">
      <span className="metadata_unit-label">Release Date</span>
      <span className="metadata_unit-info">{printDate(album.releaseDate)}</span>
    </div>
  );
};

export const SampleParents = ({ songId }) => {
  const song = useSelector((state) => selectSongById(state, songId));
  if (!song.sampleCredits) {
    return null;
  }
  const parentSongIds = song.sampleCredits.SAMPLE.parentSongIds;
  if (parentSongIds.length === 0) {
    return null;
  }
  const linksToSampleParents = parentSongIds.map((songId) => (
    <SongByArtistLink songId={songId} />
  ));
  return (
    <div className="metadata_unit metadata_unit--table_row">
      <span className="metadata_unit-label">Samples</span>
      <span className="metadata_unit-info">{linksToSampleParents}</span>
    </div>
  );
};

export const SampleChildren = ({ songId }) => {
  const song = useSelector((state) => selectSongById(state, songId));
  if (!song.sampleCredits) {
    return null;
  }
  const childSongIds = song.sampleCredits.SAMPLE.childSongIds;
  if (childSongIds.length === 0) {
    return null;
  }
  const linksToSampleChildren = childSongIds.map((songId) => (
    <SongByArtistLink songId={songId} />
  ));
  return (
    <div className="metadata_unit metadata_unit--table_row">
      <span className="metadata_unit-label">Sampled In</span>
      <span className="metadata_unit-info">{linksToSampleChildren}</span>
    </div>
  );
};

export const InterpolationParents = ({ songId }) => {
  const song = useSelector((state) => selectSongById(state, songId));
  if (!song.sampleCredits) {
    return null;
  }
  const parentSongIds = song.sampleCredits.INTERPOLATION.parentSongIds;
  if (parentSongIds.length === 0) {
    return null;
  }
  const linksToInterpolationParents = parentSongIds.map((songId) => (
    <SongByArtistLink songId={songId} />
  ));
  return (
    <div className="metadata_unit metadata_unit--table_row">
      <span className="metadata_unit-label">Interpolates</span>
      <span className="metadata_unit-info">{linksToInterpolationParents}</span>
    </div>
  );
};

export const InterpolationChildren = ({ songId }) => {
  const song = useSelector((state) => selectSongById(state, songId));
  if (!song.sampleCredits) {
    return null;
  }
  const childSongIds = song.sampleCredits.INTERPOLATION.childSongIds;
  if (childSongIds.length === 0) {
    return null;
  }
  const linksToInterpolationChildren = childSongIds.map((songId) => (
    <SongByArtistLink songId={songId} />
  ));
  return (
    <div className="metadata_unit metadata_unit--table_row">
      <span className="metadata_unit-label">Interpolated By</span>
      <span className="metadata_unit-info">{linksToInterpolationChildren}</span>
    </div>
  );
};
