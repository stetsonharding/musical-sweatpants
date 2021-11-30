import React from "react";

import "../../css/SizeButtons.css";

import { useSweatpantSizeContext } from "../../providers/SweatpantSizeProvider";

function SizeButtons(props) {
  const { isSizeButtonClicked, getSweatpantSize } = useSweatpantSizeContext();

  return (
    <div className="container">
      <button
        onClick={(e) => getSweatpantSize(e)}
        value={props.size}
        className={"size-btn"}
      >
        {props.size}
      </button>
    </div>
  );
}

export default SizeButtons;
