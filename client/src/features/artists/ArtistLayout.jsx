import React from "react";
import ArtistAbout from "./ArtistAbout";
import ArtistTopAlbums from "./ArtistTopAlbums";
import ArtistTopCollaborators from "./ArtistTopCollaborators";
import ArtistTopSongs from "./ArtistTopSongs";
import CommentsList from "../comments/CommentsList";

const ArtistLayout = ({ artistId }) => {
  return (
    <div className="Layout">
      <div className="LeftColumn">
        <ArtistAbout artistId={artistId} />
        <ArtistTopCollaborators artistId={artistId} />
        {/* <CommentsList commentableType="Artist" commentableId={artistId} /> */}
      </div>
      <div className="RightColumn">
        <ArtistTopSongs artistId={artistId} />
        <ArtistTopAlbums artistId={artistId} />
      </div>
    </div>
  );
};

export default ArtistLayout;
