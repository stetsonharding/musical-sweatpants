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
  const { cart, addToCart } = useAddToCartContext();
  const [currentAlbum] = useCurrentAlbumContext();

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
      <button
        className={
          sweatPantSize !== "" ? "add-to-cart-btn" : "add-to-cart-btn-disabled"
        }
        disabled={sweatPantSize !== "" ? true : false}
      >
        <span onClick={() => addToCart(currentAlbum, sweatPantSize)}>
          Add to cart - $60
        </span>
      </button>
    </div>
  );
}

export default MainContent;
