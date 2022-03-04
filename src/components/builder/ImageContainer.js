import React from 'react'

//sweatpant images
import frontSide from "../../assets/frontside.png";
import backSide from "../../assets/backside.png";
//context
import { useCurrentAlbumContext } from "../../providers/CurrentAlbumProvider";
//css
import "../../css/ImageContainer.css";

//Component to display images of sweatpants, print of the selected album cover, and artist name.
//This gives the user a chance to view what their sweatpants would look like before purchase.
function ImageContainer() {
  const [currentAlbum] = useCurrentAlbumContext();
  return (
    <div className="sweatpants-container">
      <div className="sweapants-images">
    
      <h4 className="artist-name-print">
      {/* if there is a selected album, display artist name on sweatpants*/}
          {currentAlbum && currentAlbum.artistName}
        </h4>
        <img
          className="sweatpants_frontview"
          src={frontSide}
          alt="Front View of Sweatpants"
        /> 

        <img
          className="album-cover-print"
        //  If there is a selected album, display album cover on sweatpants
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
