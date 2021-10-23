import React from "react";

import "../../css/ImageContainer.js";

//sweatpant images
import frontSide from "../../assets/frontside.png";
import backSide from "../../assets/backside.png";

function ImageContainer() {
  return (
    <div className="sweatpants-container">
      <div className="sweapants-images">
        <img src={frontSide} alt="Front View of Sweatpants" />
        <img src={backSide} alt="Back View of Sweatpants" />
      </div>
    </div>
  );
}

export default ImageContainer;
