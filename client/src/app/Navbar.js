import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { logoutUser } from "../features/session/sessionAsyncThunks";

import GithubLogo from "../assets/images/logo-github-512-512.png";
import LinkedInLogo from "../assets/images/logo-linkedin-512-512.png";
import YeniusLogo from "../assets/images/logo-yenius-1482-207.png";
import "../assets/stylesheets/Navbar.scss";

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
  } else if (isCurrentUser === "true") {
    userButtons = (
      <div className="userButtons">
        <a href="/" className="header-action">
          LOGGED IN:
          {username}
        </a>
        <button onClick={handleLogout} className="header-action">
          LOG OUT
        </button>
      </div>
    );
  }

  const logo = (
    <div className="logo_container">
      <a href="/" className="logo-link">
        <img src={YeniusLogo} alt="yenius" />
      </a>
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
            <a href="https://github.com/marstrong/yenius--rails6-api">
              <img height="14px" src={GithubLogo} alt="GitHub repository" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/marshall-strong/">
              <img height="14px" src={LinkedInLogo} alt="LinkedIn Profile" />
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
