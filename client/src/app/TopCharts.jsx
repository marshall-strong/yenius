// import React, { useState } from "react";

// import Dropdown from "./TopChartsDropdown";
// import TopAlbums from "../features/albums/TopAlbums";
// import TopArtists from "../features/artists/TopArtists";
// import TopSongs from "../features/songs/TopSongs";

// import ".././stylesheets/TopCharts.scss";

// const TopChartsTitle = () => (
//   <div className="PageGriddesktop-a6v82w-0 SectionTitle__Container-sc-10idewm-0 SectionTitle__Container">
//     <h2 className="PageGridFull-idpot7-0 SectionTitle__Title-sc-10idewm-1 SectionTitle__Title">
//       Charts
//     </h2>
//     <div className="PageGridCenter-q0ues6-0 SectionTitle__Subtitle-sc-10idewm-2 SectionTitle__Subtitle">
//       <h3
//         color="accent.main"
//         fontWeight="normal"
//         className="TextLabel__TopChartsTitle"
//       >
//         Trending on Yenius
//       </h3>
//     </div>
//   </div>
// );

// const TopChartsItems = ({ chartType }) => {
//   let chartsItems;
//   if (chartType === "albums") {
//     chartsItems = <TopAlbums />;
//   } else if (chartType === "artists") {
//     chartsItems = <TopArtists />;
//   } else if (chartType === "songs") {
//     chartsItems = <TopSongs />;
//   } else {
//     chartsItems = <div>Something unexpected happened in TopCharts...</div>;
//   }
//   return chartsItems;
// };

// const TopCharts = () => {
//   const [chartType, setChartType] = useState("songs");
//   return (
//     <div className="TopCharts">
//       <TopChartsTitle />
//       <Dropdown chartType={chartType} setChartType={setChartType} />
//       <TopChartsItems chartType={chartType} />
//     </div>
//   );
// };

// export default TopCharts;
