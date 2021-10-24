import React from "react";

import "../../css/ImageContainer.css";

//sweatpant images
import frontSide from "../../assets/frontside.png";
import backSide from "../../assets/backside.png";

function ImageContainer() {
  return (
    <div className="sweatpants-container">
      <div className="sweapants-images">
        <img
          className="sweatpants_frontview"
          src={frontSide}
          alt="Front View of Sweatpants"
        />
        <img
          className="sweatpants_backview"
          src={backSide}
          alt="Back View of Sweatpants"
        />
      </div>
    </div>
  );
}

export default ImageContainer;
