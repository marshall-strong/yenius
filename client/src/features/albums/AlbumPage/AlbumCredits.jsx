import React from "react";

function AlbumCredits(props) {
  return (
    <div className="MockComponent">
      <h1>AlbumCredits</h1>
      {props.subject ? props.subject.name : "LOADING..."}
    </div>
  );
}

export default AlbumCredits;
