import React from "react";
import AlbumAbout from "./AlbumAbout";
import AlbumAllSongCredits from "./AlbumAllSongCredits";
import AlbumCredits from "./AlbumCredits";
import AlbumTracklist from "./AlbumTracklist";
import CommentsList from "../../comments/CommentsList";
// import CommentsSection from "../../comments/CommentsSection";

const AlbumLayout = ({ albumId }) => {  
  return (
    <div className="Layout">
      <div className="LeftColumn">
        <AlbumTracklist albumId={albumId} />
        <CommentsList commentableType="Album" commentableId={albumId} />
      </div>
      <div className="RightColumn">
        <AlbumAbout albumId={albumId} />
        <AlbumCredits albumId={albumId} />
        <AlbumAllSongCredits albumId={albumId} />
      </div>
    </div>
  );
}

export default AlbumLayout;
