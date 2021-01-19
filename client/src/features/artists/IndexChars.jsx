import React from "react";
import { Link } from "react-router-dom";

const IndexCharListItem = ({ char }) => (
  <li key={char} className="character_index_list-element">
    <Link to={`/artists/index/${char}`} className="character_index_list-link">
      {char.toUpperCase()}
    </Link>
  </li>
);

const IndexChars = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const characters = alphabet.split("");
  const links = characters.map((char) => (
    <IndexCharListItem key={char} char={char} />
  ));
  return (
    <div className="CharacterIndexList ArtistsIndex">
      <h1>All Artists on Yenius</h1>
      <ul className="characters_index_list">{links}</ul>
    </div>
  );
};

export default IndexChars;
