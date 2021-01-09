import React from "react";
import { useSelector } from "react-redux";
import { selectSongById } from "../songsSlice";

const Description = ({ songId }) => {
  const song = useSelector((state) => selectSongById(state, songId));
  return (
    <div className="song-description_annotation">
      <div className="annotation_label">
        <br />
        <h3 className="u-inline">About "{song.name}"</h3>
      </div>
      <div className="annotation_body">
        <p>{song.description}</p>
      </div>
    </div>
  );
};

export default Description;
