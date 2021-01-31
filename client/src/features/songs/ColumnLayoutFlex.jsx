import React, { useEffect, useState } from "react";

import { getBoundingRectangle } from "../../lib";

// import { getDocumentPosition } from "../../lib"

import AnnotationsContainer from "./AnnotationsContainer";
import AnnotationSidebar from "./AnnotationSidebar";
import Description from "./Description";
import SongAlbum from "./SongAlbum";
import TrackInfo from "./TrackInfo";

// export const getDocumentPosition = (element) => {
//   if (!element) {
//     return null;
//   }
//   const viewportPosition = element.getBoundingRectangle();

//   const viewportTop = viewportPosition.top;
//   const viewportLeft = viewportPosition.left;

//   const viewportYOffset = document.documentElement.scrollTop;
//   const viewportXOffset = document.documentElement.scrollLeft;

//   const documentTop = viewportTop + viewportYOffset;
//   const documentLeft = viewportLeft + viewportXOffset;

//   return { top: Math.round(documentTop), left: Math.round(documentLeft) };
// };

const SongLayout = ({ songId }) => {
  return (
    <div className="column_layout-column_span-initial_content">
      <Description songId={songId} />
      <TrackInfo songId={songId} />
      <SongAlbum songId={songId} />
    </div>
  );
};

const VerseLayout = ({ verseId, selectedVerseRef, scrollTop }) => {
  const styleAnnotations = { paddingTop: scrollTop };
  return (
    <div
      className="column_layout-flex_column-fill_column"
      style={styleAnnotations}
    >
      <AnnotationsContainer
        selectedVerseRef={selectedVerseRef}
        verseId={verseId}
      />
      {/* <AnnotationSidebar
        selectedVerseRef={selectedVerseRef}
        verseId={verseId}
      /> */}
    </div>
  );
};

const ColumnLayoutFlex = ({ match, selectedVerseRef }) => {
  const songLayoutKlass = "ColumnSecondaryShowSong";
  const [songDisplayKlass, setSongDisplayKlass] = useState("");
  const songKlass = songLayoutKlass.concat(songDisplayKlass);

  const verseLayoutKlass = "ColumnSecondaryShowVerse";
  const [verseDisplayKlass, setVerseDisplayKlass] = useState(" display-none");
  const verseKlass = verseLayoutKlass.concat(verseDisplayKlass);

  useEffect(() => {
    if (match.params.verseId) {
      setSongDisplayKlass(" display-none");
      setVerseDisplayKlass("");
    } else {
      setSongDisplayKlass("");
      setVerseDisplayKlass(" display-none");
    }
  }, [match]);

  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    if (document.documentElement.scrollTop !== scrollTop) {
      setScrollTop(document.documentElement.scrollTop);
    }
  }, [document.documentElement.scrollTop]);

  const songId = parseInt(match.params.songId);
  const verseId = parseInt(match.params.verseId);

  const getElementTop = (element) => {
    // debugger
    if (!element) {
      return null;
    } else {
      const viewportPosition = element.getBoundingClientRect();
      const viewportTop = viewportPosition.top;
      const viewportYOffset = document.documentElement.scrollTop;
      const documentTop = viewportTop + viewportYOffset;
      return documentTop;
    }
  };

  const verseTop = getElementTop(selectedVerseRef.current);

  return (
    <div className="u-top_margin column_layout-flex_column">
      <div className={songKlass}>
        <SongLayout songId={songId} />
      </div>
      <div className={verseKlass}>
        <VerseLayout
          verseId={verseId}
          selectedVerseRef={selectedVerseRef}
          scrollTop={scrollTop}
        />
      </div>
    </div>
  );
};

export default ColumnLayoutFlex;
