import React, { useEffect, useState } from "react";

import AnnotationsContainer from "./AnnotationsContainer";
import AnnotationSidebar from "./AnnotationSidebar";
import Description from "./Description";
import SongAlbum from "./SongAlbum";
import TrackInfo from "./TrackInfo";

const SongLayout = ({ songId }) => {
  return (
    <div className="column_layout-column_span-initial_content">
      <Description songId={songId} />
      <TrackInfo songId={songId} />
      <SongAlbum songId={songId} />
    </div>
  );
};

const VerseLayout = ({ match, selectedVerseRef }) => {
  const verseId = parseInt(match.params.verseId);

  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    if (document.documentElement.scrollTop !== scrollTop) {
      setScrollTop(document.documentElement.scrollTop);
    }
  }, [document.documentElement.scrollTop]);

  const [verseDOMRect, setVerseDOMRect] = useState(null);
  useEffect(() => {
    if (match.params.verseId && selectedVerseRef.current) {
      const domRect = selectedVerseRef.current.getBoundingClientRect();
      setVerseDOMRect(domRect);
    }
  }, [match, scrollTop]);

  const [padding, setPadding] = useState(null);
  useEffect(() => {
    if (verseDOMRect) {
      const verseTop = scrollTop + verseDOMRect.top;
      const bannerHeight = 430;
      setPadding(verseTop - bannerHeight);
    }
  }, [verseDOMRect]);

  return (
    <div
      className="column_layout-flex_column-fill_column"
      style={{ paddingTop: padding }}
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

const ColumnSecondary = ({ match, selectedVerseRef }) => {
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

  return (
    <div className="u-top_margin column_layout-flex_column">
      <div className={songKlass}>
        <SongLayout songId={match.params.songId} />
      </div>
      <div className={verseKlass}>
        <VerseLayout match={match} selectedVerseRef={selectedVerseRef} />
      </div>
    </div>
  );
};

export default ColumnSecondary;
