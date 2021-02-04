import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { logoutUser } from "../../features/session/sessionSliceThunks";

import YeniusLogo from "../../images/logo-yenius-1482-207.png";

// import "../../stylesheets/Navbar.scss";

// https://iconmonstr.com/github-1-svg/
export const github = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

// https://iconmonstr.com/linkedin-1-svg/
export const linkedin = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
);

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
