import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectVerseById } from "../verses/versesSlice";

import VerseComments from "../../app/components/VerseComments";

// import "../../stylesheets/AnnotationSidebar.scss";

// future improvements to "Sidebar":
//  - click-outside="ctrl.close()"
//  - suppress-click-outside-if-handled=""
//  - animation: fade slide from left of referent
//  - position-beside="$ctrl.lyrics_positioning_target"
//  - position for maximum visibility

// https://iconmonstr.com/quote-1-svg/
const svgQuoteLeft = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

// https://iconmonstr.com/quote-3-svg/
const svgQuoteRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
  </svg>
);

// https://iconmonstr.com/x-mark-9-svg/
const svgXMark = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" />
  </svg>
);

const AnnotationsContainer = ({ verseId }) => {
  const verse = useSelector((state) => selectVerseById(state, verseId));
  if (!verse) {
    return null;
  }
  const markup = { __html: verse.body };
  return (
    <section>
      <div className="AnnotationSidebar">
        <div className="u-relative nganimate-fade_slide_from_left">
          <div className="annotation_sidebar_unit">
            <div>
              <div className="placeholder annotation_placeholder annotation_placeholder--hide">
                <div className="annotation_label">
                  <span>Yenius Annotations</span>
                  <span style={{ paddingLeft: 210 }}>
                    <Link to={`/songs/${verse.songId}`}>{svgXMark}</Link>
                  </span>
                </div>
                <div className="rich_text_formatting placeholder-pulsing_content u-top_margin">
                  <div>
                    <span>
                      <div>{svgQuoteLeft}</div>
                    </span>
                    <span>
                      <div dangerouslySetInnerHTML={markup} />
                    </span>
                    <span>
                      <div style={{ paddingLeft: 320 }}>{svgQuoteRight}</div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="annotation_sidebar_arrow">
            <svg
              src="left_arrow.svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10.87 21.32"
            >
              <path d="M9.37 21.32L0 10.66 9.37 0l1.5 1.32-8.21 9.34L10.87 20l-1.5 1.32"></path>
            </svg>
          </div>
          <div className="annotation_sidebar_unit" show-arrow-at-offset="">
            <div object="annotation">
              <div className="annotation_label u-clickable">
                <span>________________________________________________</span>
              </div>

              <VerseComments verseId={verseId} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnotationsContainer;
