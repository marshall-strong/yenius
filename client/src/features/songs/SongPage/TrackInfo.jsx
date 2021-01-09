import React from "react";
import { useSelector } from "react-redux";
import { selectAlbumById } from "../../albums/albumsSlice";
import { selectSongById } from "../songsSlice";
import {
  PrimaryArtists,
  FeaturedArtists,
  ProductionArtists,
  AlbumName,
  ReleaseDate,
  SampleParents,
  SampleChildren,
  InterpolationParents,
  InterpolationChildren,
} from "./TrackMetadata";

const TrackInfo = ({ songId }) => {
  const song = useSelector((state) => selectSongById(state, songId));
  const album = useSelector((state) => selectAlbumById(state, song.albumId));
  const asyncRequestStatus = useSelector((state) => state.asyncRequests.status);

  let content;
  if (asyncRequestStatus === "fulfilled" && song && album) {
    content = (
      <div className="u-xx_large_vertical_margins">
        <h3 className="text_label u-x_small_bottom_margin">
          "{song.name}" Track Info
        </h3>
        <PrimaryArtists songId={songId} />
        <FeaturedArtists songId={songId} />
        <ProductionArtists songId={songId} />
        <AlbumName songId={songId} />
        <ReleaseDate songId={songId} />
        <SampleParents songId={songId} />
        <SampleChildren songId={songId} />
        <InterpolationParents songId={songId} />
        <InterpolationChildren songId={songId} />
      </div>
    );
  }
  return <div>{content}</div>;
};

export default TrackInfo;
