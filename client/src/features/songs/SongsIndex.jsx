import React from "react";
import { Link } from "react-router-dom";
import "../../assets/stylesheets/SongsIndex.scss";

const LinkToCharSongs = ({ char }) => (
  <li key={char} className="character_index_list-element">
    <Link to={`/songs/index/${char}`} className="character_index_list-link">
      {char.toUpperCase()}
    </Link>
  </li>
);

const SongsIndex = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const characters = alphabet.split("");
  const links = characters.map((char) => (
    <LinkToCharSongs key={char} char={char} />
  ));
  return (
    <div className="CharacterIndexList SongsIndex">
      <h1>All Songs on Yenius</h1>
      <ul className="characters_index_list">{links}</ul>
    </div>
  );
};

export default SongsIndex;
