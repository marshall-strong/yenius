import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/stylesheets/ArtistsIndex.scss";

const ArtistsIndexPage = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  // const digits = "0123456789";
  const index = alphabet.split("");
  const links = index.map((char) => (
    <li key={char} className="character_index_list-element">
      <Link to={`/artists-index/${char}`} className="character_index_list-link">
        {char.toUpperCase()}
      </Link>
    </li>
  ));
  const content = (
    <div className="CharacterIndexList ArtistsIndex">
      <h1>All Artists on Yenius</h1>
      <ul className="characters_index_list">{links}</ul>
    </div>
  );
  return content;
};

export default ArtistsIndexPage;
