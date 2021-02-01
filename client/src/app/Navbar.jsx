import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { logoutUser } from "../features/session/sessionAsyncThunks";

import { github, linkedin } from "./IconicFont";
import GithubLogo from "../images/logo-github-512-512.png";
import LinkedInLogo from "../images/logo-linkedin-512-512.png";
import YeniusLogo from "../images/logo-yenius-1482-207.png";
import ".././stylesheets/Navbar.scss";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isCurrentUser, setIsCurrentUser] = useState("false");
  const [username, setUsername] = useState("user");
  const currentUser = useSelector((state) => state.session.currentUser);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  useEffect(() => {
    if (currentUser) {
      setIsCurrentUser("true");
      setUsername(currentUser.username);
    } else if (!currentUser) {
      setIsCurrentUser("false");
    }
  }, [currentUser, dispatch]);

  let userButtons;

  if (isCurrentUser === "false") {
    userButtons = (
      <div className="userButtons">
        <Link to="/signup" className="header-action">
          Sign Up
        </Link>
        <Link to="/login" className="header-action">
          Sign In
        </Link>
      </div>
    );
  } else if (currentUser) {
    userButtons = (
      <div className="userButtons">
        <Link to={`/users/${currentUser.id}`} className="header-action">
          LOGGED IN:
          {username}
        </Link>
        <div onClick={handleLogout} className="header-action">
          LOG OUT
        </div>
      </div>
    );
  }

  const logo = (
    <div className="logo_container">
      <Link to="/" className="logo-link">
        <img src={YeniusLogo} alt="yenius" />
      </Link>
    </div>
  );

  const yellowNavbar = (
    <div className="yellowNavbar">
      {logo}
      {userButtons}
    </div>
  );

  const blackNavbar = (
    <div className="blackNavbar">
      <nav>
        <ul>
          <li>
            <Link to="/artists" className="textLabel">
              {" "}
              ARTISTS{" "}
            </Link>
          </li>
          <li> | </li>
          <li>
            <Link to="/albums"> ALBUMS </Link>
          </li>
          <li> | </li>
          <li>
            <Link to="/songs"> SONGS </Link>
          </li>
          <li> | </li>
          <li>
            <a
              href="https://github.com/marstrong/yenius"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="iconmonstr" style={{ fill: "#FFFFFF" }}>
                {github}
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/marshall-strong/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="iconmonstr" style={{ fill: "#FFFFFF" }}>
                {linkedin}
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );

  return (
    <header className="Navbar">
      {yellowNavbar}
      {blackNavbar}
    </header>
  );
};

export default Navbar;
