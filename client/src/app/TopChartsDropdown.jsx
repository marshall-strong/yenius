import React, { useEffect, useState } from "react";

import "../assets/stylesheets/TopChartsDropdown.scss";

const checkmark = (
  <svg viewBox="0 0 22 16.2">
    <path d="M8.83 16.2L0 7.97l2.06-2.21 6.62 6.17L19.79 0 22 2.06 8.83 16.2"></path>
  </svg>
);

const Option = ({ value, chartType, setChartType, hideDropdown }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setChartType(value);
    hideDropdown(e);
  };
  const isSelected = value === chartType;
  const icon = isSelected ? checkmark : null;
  return (
    <div className="SquareManySelects__Option-sc-1kktot3-5 eLlkRP">
      <div className="SquareSelectOption__Container-h4rr3o-0 gMvRPT">
        <button onClick={handleClick}>
          {value.toUpperCase()}
          {icon}
        </button>
      </div>
    </div>
  );
};

const ChartOptions = ({
  chartType,
  setChartType,
  isExpanded,
  hideDropdown,
}) => {
  const values = ["albums", "artists", "songs"];

  let chartOptions = <div className="SquareManySelects__Selects hvGVqr"></div>;

  if (isExpanded) {
    const options = values.map((value) => (
      <Option
        value={value}
        chartType={chartType}
        setChartType={setChartType}
        hideDropdown={hideDropdown}
      />
    ));
    chartOptions = (
      <div className="SquareManySelects__Selects-sc-1kktot3-4 hvGVqr">
        <div className="SquareManySelects__Select-sc-1kktot3-3 gIwQZZ">
          <div className="SquareManySelects__SelectTitle-sc-1kktot3-2 egKZtQ">
            <span fontWeight="normal" className="TextLabel-sc-8kw9oj-0 lcnMaT">
              Type
            </span>
          </div>
          {options}
        </div>
      </div>
    );
  }
  if (!isExpanded) {
    chartOptions = <div className="SquareManySelects__Selects hvGVqr"></div>;
  }

  return chartOptions;
};

const TopChartsDropdown = ({ chartType, setChartType }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const arrowStyle = isExpanded
    ? "SquareSelectTitle__Arrow arrow_up"
    : "SquareSelectTitle__Arrow arrow_down";
  const dropdownContainerStyle = isExpanded
    ? "SquareManySelects__Container isOpen"
    : "SquareManySelects__Container isClosed";

  const showDropdown = (e) => {
    e.preventDefault();
    setIsExpanded(true);
  };

  useEffect(() => {
    if (isExpanded) {
      document.addEventListener("click", hideDropdown);
    }
  }, [isExpanded]);

  const hideDropdown = (e) => {
    e.preventDefault();
    setIsExpanded(false);
    document.removeEventListener("click", hideDropdown);
  };

  const topChartsDropdown = (
    <div className="TopChartsDropdown">
      <button className="SquareManySelects__Wrapper" onClick={showDropdown}>
        <div
          // style="width: 278.672px; height: 44px; box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px;"
          // className="SquareManySelects__Container"
          className={dropdownContainerStyle}
        >
          <div className="SquareSelectTitle__Container">
            <span
              fontWeight="normal"
              className="SquareSelectTitle__Container_TextLabel"
            >
              {chartType}
            </span>
            <div
              // style="transform:rotateX(0deg)"
              className={arrowStyle}
            >
              <svg viewBox="0 0 21.32 10.91">
                <path d="M10.66 10.91L0 1.5 1.32 0l9.34 8.24L20 0l1.32 1.5-10.66 9.41"></path>
              </svg>
            </div>
          </div>
          <ChartOptions
            chartType={chartType}
            setChartType={setChartType}
            isExpanded={isExpanded}
            hideDropdown={hideDropdown}
          />
        </div>
      </button>
    </div>
  );

  return topChartsDropdown;
};

export default TopChartsDropdown;
