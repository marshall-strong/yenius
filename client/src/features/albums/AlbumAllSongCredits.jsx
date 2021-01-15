import React from "react";

function AlbumAllSongCredits(props) {
  return (
    <div className="MockComponent">
      <h1>AlbumAllSongCredits</h1>
      {props.subject ? props.subject.name : "LOADING..."}
    </div>
  );
}

export default AlbumAllSongCredits;
