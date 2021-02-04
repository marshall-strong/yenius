import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const svgChevron = (
  <svg viewBox="0 0 21.32 10.91">
    <path d="M10.66 10.91L0 1.5 1.32 0l9.34 8.24L20 0l1.32 1.5-10.66 9.41"></path>
  </svg>
);

const squareStop = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M2 2h20v20h-20z" />
  </svg>
);

const Dropdown = ({ setContainerState, optionsParams }) => {
  const currentUser = useSelector((state) => state.session.currentUser);
  const [display, setDisplay] = useState("select a color");
  const [showDropdown, setShowDropdown] = useState(false);

  const openDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(true);
  };

  const closeDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(false);
    document.removeEventListener("click", closeDropdown);
  };

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener("click", closeDropdown);
    }
  }, [showDropdown]);

  const generateOption = (optionObj, idx) => (
    <div className="SquareManySelects__Option" key={idx}>
      <div className="SquareSelectOption__Container">
        <div
          onClick={(e) => {
            e.preventDefault();
            setDisplay(optionObj.funName);
            setContainerState(optionObj);
            closeDropdown(e);
          }}
        >
          {optionObj.funName}
          <span
            className="iconmonstr userColor"
            style={{ fill: optionObj.hexCode }}
          >
            {squareStop}
          </span>
        </div>
      </div>
    </div>
  );

  const options = optionsParams.map((optionObj, idx) =>
    generateOption(optionObj, idx)
  );

  const arrowStyle = showDropdown
    ? "SquareSelectTitle__Arrow arrow_up"
    : "SquareSelectTitle__Arrow arrow_down";

  const dropdownContainerStyle = showDropdown
    ? "SquareManySelects__Container isOpen isOpenDropdown-ProfileEdit"
    : "SquareManySelects__Container isClosed isClosedDropdown-ProfileEdit";

  const dropdownExpandedContent = showDropdown ? (
    <div className="DropdownExpansionContainer">
      <div className="DropdownOptionsContainer">{options}</div>
    </div>
  ) : (
    <div className="DropdownExpansionContainer">
      <div className="DropdownOptionsContainer"></div>
    </div>
  );

  return (
    <div className="Dropdown">
      <div className="SquareManySelects__Wrapper" onClick={openDropdown}>
        <div className={dropdownContainerStyle}>
          <div className="SquareSelectTitle__Container">
            {display}
            <div className={arrowStyle}>{svgChevron}</div>
          </div>
        </div>
      </div>
      {dropdownExpandedContent}
    </div>
  );
};

export default Dropdown;
