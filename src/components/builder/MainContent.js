import React from "react";

import "../../css/MainContent.css";

import { useSweatpantSizeContext } from "../../providers/SweatpantSizeProvider";
import { useAddToCartContext } from "../../providers/AddToCartProvider";
import { useCurrentAlbumContext } from "../../providers/CurrentAlbumProvider";

//components
import FindAlbum from "./FindAlbum";
import SizeButtons from "./SizeButtons";

function MainContent() {
  const { sweatPantSize } = useSweatpantSizeContext();
  const { addToCart, setAddEffect } = useAddToCartContext();
  const [currentAlbum] = useCurrentAlbumContext();

  const handleAddToCart = () => {

    addToCart(currentAlbum, sweatPantSize, 60)
    setAddEffect(true)


  }

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
        {["XS", "S", "M", "L", "XL"].map((item, index) => (
          <div key={index}>
            <SizeButtons size={item} />
          </div>
        ))}
      </div>
      <div className="add-to-cart-btn">
      <button
        className={
          sweatPantSize !== "" ? "action-btn" : "action-btn-disabled"
        }
        disabled={sweatPantSize !== "" ? true : false}
      >
        <span onClick={() => handleAddToCart()}>
          Add to cart - $60
        </span>
      </button>
      </div>
    </div>
  );
}

export default MainContent;
