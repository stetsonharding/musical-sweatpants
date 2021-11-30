import React from "react";

import "../../css/MainContent.css";

//components
import FindAlbum from "./FindAlbum";
import SizeButtons from "./SizeButtons";

function MainContent() {
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
        <SizeButtons size="XS" />
        <SizeButtons size="S" />
        <SizeButtons size="M" />
        <SizeButtons size="L" />
        <SizeButtons size="XL" />
      </div>
      <button className="add-to-cart-btn">
        <span>Add to cart</span>
      </button>
    </div>
  );
}

export default MainContent;
