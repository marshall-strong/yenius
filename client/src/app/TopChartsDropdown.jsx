// import React, { useEffect, useState } from "react";

// import ".././stylesheets/TopChartsDropdown.scss";

// const chevron = (
//   <svg viewBox="0 0 21.32 10.91">
//     <path d="M10.66 10.91L0 1.5 1.32 0l9.34 8.24L20 0l1.32 1.5-10.66 9.41"></path>
//   </svg>
// );

// const checkmark = (
//   <svg viewBox="0 0 22 16.2">
//     <path d="M8.83 16.2L0 7.97l2.06-2.21 6.62 6.17L19.79 0 22 2.06 8.83 16.2"></path>
//   </svg>
// );

// const TopChartsDropdown = ({ chartType, setChartType }) => {
//   const [display, setDisplay] = useState("initial display");
//   const [isExpanded, setIsExpanded] = useState(false);

//   const arrowStyle = isExpanded
//   ? "SquareSelectTitle__Arrow arrow_up"
//   : "SquareSelectTitle__Arrow arrow_down";
//   const dropdownContainerStyle = isExpanded
//   ? "SquareManySelects__Container isOpen"
//   : "SquareManySelects__Container isClosed";

//   const showDropdown = (e) => {
//     e.preventDefault();
//     setIsExpanded(true);
//   };

//   const hideDropdown = (e) => {
//     e.preventDefault();
//     setIsExpanded(false);
//     document.removeEventListener("click", hideDropdown);
//   };

//   useEffect(() => {
//     if (isExpanded) {
//       document.addEventListener("click", hideDropdown);
//     }
//   }, [isExpanded]);

//   const handleAlbumsClick = (e) => {
//     e.preventDefault();
//     setDisplay("albums");
//     setIsExpanded(false);
//     // setChartType("albums");
//     hideDropdown(e);
//   };

//   const handleArtistsClick = (e) => {
//     e.preventDefault();
//     setDisplay("artists");
//     // setChartType("artists");
//     hideDropdown(e);
//   };

//   const handleSongsClick = (e) => {
//     e.preventDefault();
//     setDisplay("songs");
//     // setChartType("songs");
//     hideDropdown(e);
//   };

//   const dropdownContent = (
//     <div className="SquareManySelects__Selects-sc-1kktot3-4 hvGVqr">
//       <div className="SquareManySelects__Select-sc-1kktot3-3 gIwQZZ">
//         <div className="SquareManySelects__SelectTitle-sc-1kktot3-2 egKZtQ">
//           <span fontWeight="normal" className="TextLabel-sc-8kw9oj-0 lcnMaT">
//             Type
//           </span>
//         </div>

//         <div className="SquareManySelects__Option-sc-1kktot3-5 eLlkRP">
//           <div className="SquareSelectOption__Container-h4rr3o-0 gMvRPT">
//             <div onClick={handleAlbumsClick}>
//               {"albums".toUpperCase()}
//               {/* {icon} */}
//             </div>
//           </div>
//         </div>

//         <div className="SquareManySelects__Option-sc-1kktot3-5 eLlkRP">
//           <div className="SquareSelectOption__Container-h4rr3o-0 gMvRPT">
//             <div onClick={handleArtistsClick}>
//               {"artists".toUpperCase()}
//               {/* {icon} */}
//             </div>
//           </div>
//         </div>

//         <div className="SquareManySelects__Option-sc-1kktot3-5 eLlkRP">
//           <div className="SquareSelectOption__Container-h4rr3o-0 gMvRPT">
//             <div onClick={handleSongsClick}>
//               {"songs".toUpperCase()}
//               {/* {icon} */}
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );

//   const dropdown = isExpanded ? dropdownContent : null;

//   const topChartsDropdown = (
//     <div className="TopChartsDropdown">
//       <div className="SquareManySelects__Wrapper" onClick={showDropdown}>
//         <div className={dropdownContainerStyle}>
//           <div className="SquareSelectTitle__Container">
//             {display}
//             <div className={arrowStyle}>{chevron}</div>
//           </div>
//           {dropdown}
//         </div>
//       </div>
//     </div>
//   );

//   return topChartsDropdown;
// };

// export default TopChartsDropdown;
