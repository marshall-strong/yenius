import React from "react";
import { Link } from "react-router-dom";

import "../stylesheets/CommunityButtons.scss";

const CommunityButtons = () => {
  return (
    <div className="PageGridFull-idpot7-0 PageGridFull">
      <div className="Communitydesktop__Buttons-x5mxcf-0 Communitydesktop__Buttons">
        <span className="Communitydesktop__Join-x5mxcf-1 Communitydesktop__Join">
          <Link to="/signup" className="SquareButton-sc-109lda7-0 SquareButton">
            Join Our Community
          </Link>
        </span>
        {/* <Link
          to="/signup"
          className="SquareButton-sc-109lda7-0 SquareButton"
        >
          Learn How Genius Works
        </Link> */}
      </div>
    </div>
  );
};

export default CommunityButtons;
