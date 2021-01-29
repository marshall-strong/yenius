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

const VerseLayout = ({ verseId }) => {
  return (
    <div className="column_layout-flex_column-fill_column">
      {/* <AnnotationsContainer verseId={verseId} /> */}
      <AnnotationSidebar />
    </div>
  );
};

const ColumnLayoutFlex = ({ match }) => {
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

  const songId = parseInt(match.params.songId);
  const verseId = parseInt(match.params.verseId);

  return (
    <div className="u-top_margin column_layout-flex_column">
      <div className={songKlass}>
        <SongLayout songId={songId} />
      </div>
      <div className={verseKlass}>
        <VerseLayout verseId={verseId} />
      </div>
    </div>
  );
};

export default ColumnLayoutFlex;
