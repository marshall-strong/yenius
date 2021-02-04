import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { logoutUser } from "../../features/session/sessionSliceThunks";

import "../../stylesheets/PageFooter.scss";

const CharacterIndexListElements = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const characters = alphabet.split("");
  const links = characters.map((char) => (
    <li className="character_index_list-element" key={char}>
      <Link to={`/artists/index/${char}`} className="character_index_list-link">
        {char.toUpperCase()}
      </Link>
    </li>
  ));
  return <ul className="characters_index_list">{links}</ul>;
};

export const ArtistIndexFooter = () => {
  return (
    <div className="footer footer--secondary">
      <span className="footer-artist_links_label">All Artists:</span>
      <CharacterIndexListElements />
    </div>
  );
};

const Footer = () => {
  const currentUser = useSelector((state) => state.session.currentUser);
  const dispatch = useDispatch();
  const handleLogoutClick = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };
  const sessionLinks = currentUser ? (
    <span className="logout" onClick={handleLogoutClick}>
      Log out
    </span>
  ) : (
    <span>
      <Link to="/signup">Sign up</Link>
      <Link to="/login">Sign in</Link>
    </span>
  );
  return (
    <footer className="page_footer PageFooter">
      <div className="footer">
        <div>
          <a
            href="https://github.com/marstrong/yenius--rails6-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Yenius
          </a>
          {/* <Link to="/">Contributor Guidelines</Link> */}
          {/* <Link to="/">Press</Link> */}
          {/* <Link to="/">Advertise</Link> */}
          {/* <Link to="/">Event Space</Link> */}
        </div>
        <div>
          {/* <Link to="/">Privacy Policy</Link> */}
          {/* <Link to="/">Delete Account</Link> */}
          {/* <Link to="/">Licensing</Link> */}
          {/* <Link to="/">Jobs</Link> */}
          {/* <Link to="/">Developers</Link> */}
          {/* <Link to="/">Terms of Use</Link> */}
          {/* <Link to="/">Copyright Policy</Link> */}
          <a
            href="https://www.linkedin.com/in/marshall-strong/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us
          </a>
          {/* <Link to="/">Do Not Sell My Personal Information</Link> */}
          {/* <Link to="/">Sign out</Link> */}
          {sessionLinks}
        </div>
        <div>
          <span className="footer-copyright">
            Yenius © 2021 by Marshall Strong
          </span>
        </div>
      </div>
      <ArtistIndexFooter />
    </footer>
  );
};

export default Footer;
