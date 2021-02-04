import React from "react";
import { Link } from "react-router-dom";

import TopScholars from "../features/users/TopScholars";

import "../stylesheets/Charts.scss";
import "../stylesheets/Community.scss";
import "../stylesheets/CommunityButtons.scss";
import "../stylesheets/TopSongsRow.scss";

const CommunityTitle = () => (
  <div className="SectionTitle__Container">
    <h2 className="SectionTitle__Title">Community</h2>
    <div className="SectionTitle__Subtitle">
      <h3 className="TextLabel__TopChartsTitle">
        Yenius's community of contributors powers the world's biggest collection
        of Kanye West song lyrics and musical knowledge.
      </h3>
    </div>
  </div>
);

const CommunityButtons = () => {
  return (
    <div className="PageGridFull-idpot7-0 PageGridFull">
      <div className="Communitydesktop__Buttons-x5mxcf-0 Communitydesktop__Buttons">
        <span className="Communitydesktop__Join-x5mxcf-1 Communitydesktop__Join">
          <Link to="/signup" className="SquareButton-sc-109lda7-0 SquareButton">
            Join Our Community
          </Link>
        </span>
      </div>
    </div>
  );
};

const TopScholarsHeader = () => (
  <div className="TopSongRow">
    <div className="ChartItem__Row">
      <div className="ChartItem__Rank">
        <span className="TextLabel_3">Rank</span>
      </div>
      <div className="ChartSong__CoverAndTitle">
        <div className="ChartSong__Cover">
          {/* <div className="SizedImage__Container" style={styleUserImage}> */}
          {/* <div className="SizedImage__Container"></div> */}
        </div>
        <h3 className="ChartSong__TitleAndLyrics">
          {/* <div className="ChartSong__Title"> */}
          <span className="TextLabel_3">Top Scholars</span>
          {/* </div> */}
        </h3>
      </div>
      <h4 className="ChartSong__Artist">{/* {"YeniusIQ"} */}</h4>
      <div className="ChartSong__Metadata">
        <div className="ChartSong__Metadatum">
          <div className="IconWithLabel__Container">
            <div color="accent.main" className="IconWithLabel__Icon">
              {/* {svgFlame} */}
            </div>
            <span
              color="accent.main"
              fontWeight="normal"
              className="TextLabel_2"
            >
              {/* 363 */}
            </span>
          </div>
        </div>
        <div className="ChartSong__Metadatum">
          <div className="IconWithLabel__Container">
            <div color="background.on" className="IconWithLabel__Icon_2">
              {/* {svgEye} */}
            </div>
            <span className="TextLabel_3">Yenius IQ</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Community = () => {
  return (
    <div className="Community">
      <CommunityTitle />
      <CommunityButtons />
      <TopScholarsHeader />
      <TopScholars />
    </div>
  );
};

export default Community;
