// import React from "react";

// import Description from "./Description";
// import TrackInfo from "./TrackInfo";
// import SongAlbum from "./SongAlbum";
// import AnnotationsContainer from "./AnnotationsContainer";

// const ColumnSecondary = ({ match }) => {
//   const songId = parseInt(match.params.songId);
//   const verseId = parseInt(match.params.verseId);

//   const songKlass = match.params.verseId
//     ? "ColumnSecondaryShowSong display-none"
//     : "ColumnSecondaryShowSong";
//   const verseKlass = match.params.verseId
//     ? "ColumnSecondaryShowVerse"
//     : "ColumnSecondaryShowVerse display-none";

//   return (
//     <div className="column_layout-column_span column_layout-column_span--secondary u-top_margin column_layout-flex_column">
//       <div className={songKlass}>
//         <div className="column_layout-column_span-initial_content">
//           <Description songId={songId} />
//           <TrackInfo songId={songId} />
//           <SongAlbum songId={songId} />
//         </div>
//       </div>
//       <div className={verseKlass}>
//         <div className="column_layout-flex_column-fill_column">
//           <AnnotationsContainer verseId={verseId} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ColumnSecondary;
