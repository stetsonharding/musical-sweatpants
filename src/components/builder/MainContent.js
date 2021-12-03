import React, { useContext } from "react";

import "../../css/MainContent.css";

import { useSweatpantSizeContext } from "../../providers/SweatpantSizeProvider";

//components
import FindAlbum from "./FindAlbum";
import SizeButtons from "./SizeButtons";

function MainContent() {
  const { sweatPantSize } = useSweatpantSizeContext();

  return (
    <div className="main-container">
      <div className="main-information">
        <h1>Musical Sweatpants</h1>
        <p id="main-description">
          Ever wanted your favorite music album on a pair of sweatpants? No?
          Well, with Musical Sweatpants, you can do that anyways.
        </p>
      </div>
      {/* album input */}
      <div className="find-album-container">
        <FindAlbum />
      </div>
      {/* size btns */}
      <div className="size-text-container">
        <p id="size-text">Size</p>
      </div>
      <div className="size-buttons-container">
        {/* [<SizeButtons size="XS" />
        <SizeButtons size="S" />
        <SizeButtons size="M" />
        <SizeButtons size="L" />
        <SizeButtons size="XL" />] */}
        {["XS", "S", "M", "L", "XL"].map((item, index) => (
          <div key={index}>
            <SizeButtons size={item} />
          </div>
        ))}
      </div>
      <button
        className={
          sweatPantSize !== "" ? "add-to-cart-btn" : "add-to-cart-btn-disabled"
        }
        disabled={sweatPantSize !== "" ? true : false}
      >
        <span>Add to cart</span>
      </button>
    </div>
  );
}

export default MainContent;
