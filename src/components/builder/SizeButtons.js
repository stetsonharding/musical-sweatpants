import React from "react";
//context
import { useSweatpantSizeContext } from "../../providers/SweatpantSizeProvider";
//css
import "../../css/SizeButtons.css";

//Displays sweatpants size buttons.
function SizeButtons(props) {
  const { getSweatpantSize, sweatPantSize } = useSweatpantSizeContext();
  return (
    <div className="container">
      <button
        onClick={(e) => getSweatpantSize(e)}
        value={props.size}
        className={"size-btn"}
        style={{
          backgroundColor:
            sweatPantSize === props.size ? "rgb(25, 236, 236)" : "white",
          color: sweatPantSize === props.size ? "white" : "rgb(25, 236, 236)",
        }}
      >
        {props.size}
      </button>
    </div>
  );
}
export default SizeButtons;
