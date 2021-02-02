import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectVerseById } from "../verses/versesSlice";

import AnnotationSidebar from "./AnnotationSidebar";
import VerseComments from "../verses/VerseComments";

import { quoteLeft, quoteRight, xMark } from "../../app/iconmonstr";

import "../../stylesheets/AnnotationSidebar.scss";

// future improvements to "Sidebar":
//  - click-outside="ctrl.close()"
//  - suppress-click-outside-if-handled=""
//  - animation: fade slide from left of referent
//  - position-beside="$ctrl.lyrics_positioning_target"
//  - position for maximum visibility

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
            <annotation-placeholder>
              <div className="placeholder annotation_placeholder annotation_placeholder--hide">
                <div className="annotation_label">
                  <span>Yenius Annotations</span>
                  <span className=".topRight">
                    <Link to={`/songs/${verse.songId}`}>{xMark}</Link>
                  </span>
                </div>
                <div className="rich_text_formatting placeholder-pulsing_content u-top_margin">
                  {/* <div>
                    {quoteLeft}
                    <div dangerouslySetInnerHTML={markup} />
                    {quoteRight}
                  </div> */}

                  <div>
                    <span>
                      <div>{quoteLeft}</div>
                    </span>
                    <span>
                      <div dangerouslySetInnerHTML={markup} />
                    </span>
                    <span>
                      <div>{quoteRight}</div>
                    </span>
                  </div>
                </div>
              </div>
            </annotation-placeholder>
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
            <annotation object="annotation">
              <div className="annotation_label u-clickable">
                <span>________________________________________________</span>
              </div>

              <VerseComments verseId={verseId} />
            </annotation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnotationsContainer;
