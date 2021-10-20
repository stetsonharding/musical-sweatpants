import React from "react";

// import "./css/ImageContainer.css";

//sweatpant images
import frontSide from "../../assets/frontside.png";
import backSide from "../../assets/backside.png";

function ImageContainer() {
  return (
    <div
      className="sweatpants-container"
      style={{ backgroundColor: "lightgrey", width: "50%", height: "100%" }}
    >
      <div
        className="sweapants-images"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <img
          style={{ margin: "40px" }}
          src={frontSide}
          alt="Front View of Sweatpants"
        />
        <img
          style={{ margin: "40px" }}
          src={backSide}
          alt="Back View of Sweatpants"
        />
      </div>
    </div>
  );
}

export default ImageContainer;
