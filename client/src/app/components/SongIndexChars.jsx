import React from "react";
import { Link } from "react-router-dom";

const IndexCharListItem = ({ char }) => (
  <li key={char} className="character_index_list-element">
    <Link to={`/songs/index/${char}`} className="character_index_list-link">
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
    <div className="CharacterIndexList SongsIndex">
      <h1>Songs Index</h1>
      <h3>SELECT A LETTER</h3>
      <div className="IndexCharsContainer">
        <ul className="characters_index_list">{links}</ul>
      </div>
    </div>
  );
};

export default IndexChars;
