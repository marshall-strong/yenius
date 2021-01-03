import React from "react";
import "../../../assets/stylesheets/SongsIndex.scss";

const SongsIndexPage = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  // const digits = "0123456789";
  const index = alphabet.split("");
  const links = index.map((char) => (
    <li key={char} className="character_index_list-element">
      <a href={`/songs-index/${char}`} className="character_index_list-link">
        {char.toUpperCase()}
      </a>
    </li>
  ));
  const content = (
    <div className="CharacterIndexList SongsIndex">
      <h1>All Songs on Yenius</h1>
      <ul className="characters_index_list">{links}</ul>
    </div>
  );
  return content;
};

export default SongsIndexPage;
