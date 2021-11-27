import React, { useContext } from "react";

import "../../css/ImageContainer.css";

//sweatpant images
import frontSide from "../../assets/frontside.png";
import backSide from "../../assets/backside.png";
import { useCurrentAlbumContext } from "../../providers/CurrentAlbumProvider";

function ImageContainer() {
  const [currentAlbum] = useCurrentAlbumContext();

  console.log(currentAlbum);

  return (
    <div className="sweatpants-container">
      <div className="sweapants-images">
        <h4 className="artist-name-print">
          {" "}
          {currentAlbum && currentAlbum.artistName}
        </h4>
        <img
          className="sweatpants_frontview"
          src={frontSide}
          alt="Front View of Sweatpants"
        />
        <img
          className="album-cover-print"
          src={currentAlbum && currentAlbum.artworkUrl60}
          alt={currentAlbum && "Album Cover"}
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
