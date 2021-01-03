import React from "react";
import "../assets/stylesheets/PageFooter.scss";

export const ArtistIndexFooter = () => {
  return (
    <div className="footer footer--secondary">

      <span className="footer-artist_links_label">All Artists:</span>
      <ul className="characters_index_list">
        <li className="character_index_list-element">
          <a
            href="/artists-index/a"
            className="character_index_list-link"
          >
            A
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/b"
            className="character_index_list-link"
          >
            B
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/c"
            className="character_index_list-link"
          >
            C
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/d"
            className="character_index_list-link"
          >
            D
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/e"
            className="character_index_list-link"
          >
            E
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/f"
            className="character_index_list-link"
          >
            F
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/g"
            className="character_index_list-link"
          >
            G
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/h"
            className="character_index_list-link"
          >
            H
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/i"
            className="character_index_list-link"
          >
            I
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/j"
            className="character_index_list-link"
          >
            J
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/k"
            className="character_index_list-link"
          >
            K
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/l"
            className="character_index_list-link"
          >
            L
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/m"
            className="character_index_list-link"
          >
            M
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/n"
            className="character_index_list-link"
          >
            N
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/o"
            className="character_index_list-link"
          >
            O
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/p"
            className="character_index_list-link"
          >
            P
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/q"
            className="character_index_list-link"
          >
            Q
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/r"
            className="character_index_list-link"
          >
            R
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/s"
            className="character_index_list-link"
          >
            S
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/t"
            className="character_index_list-link"
          >
            T
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/u"
            className="character_index_list-link"
          >
            U
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/v"
            className="character_index_list-link"
          >
            V
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/w"
            className="character_index_list-link"
          >
            W
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/x"
            className="character_index_list-link"
          >
            X
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/y"
            className="character_index_list-link"
          >
            Y
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/z"
            className="character_index_list-link"
          >
            Z
          </a>
        </li>

        <li className="character_index_list-element">
          <a
            href="/artists-index/0"
            className="character_index_list-link"
          >
            #
          </a>
        </li>
      </ul>
    </div>
  );
};

const PageFooter = () => {

  
  return (
    <footer className="page_footer">
      <div className="footer">
        <div>
          <a href="/">About Genius</a>
          <a href="/">Contributor Guidelines</a>
          <a href="/">Press</a>
          <a href="/">Advertise</a>
          <a href="/">Event Space</a>
        </div>
        <div>
          <a href="/">Privacy Policy</a>
          <a href="/">Delete Account</a>
          <a href="/">Licensing</a>
          <a href="/">Jobs</a>
          <a href="/">Developers</a>
          <a href="/">Terms of Use</a>
          <a href="/">Copyright Policy</a>
          <a href="/">Contact us</a>
          <a href="/">Do Not Sell My Personal Information</a>
          <a href="/">Sign out</a>
        </div>
        <div>
          <span className="footer-copyright">© 2020 Genius Media Group Inc.</span>
        </div>
      </div>
      <ArtistIndexFooter />
    </footer>
  );
};

export default PageFooter;
