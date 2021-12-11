import React from "react";

import { useAddToCartContext } from "../providers/AddToCartProvider";

import "../css/CartItem.css";

export default function CartItems() {
  const { cart, removeCartItem } = useAddToCartContext();

  return (
    <div className="cart-item-container">
      {cart.map((item, index) => {
        return (
          <div key={index} className="search-results-flex">
            <div className="cart-item-image-container">
              <img src={item.currentAlbum.artworkUrl60} alt="Artist's Album" />
            </div>
            <div className="cart-item-information">
              <p>
                SWEATPANTS -{item.size} -${item.price}
              </p>
              <p>
                {item.currentAlbum.collectionName} -
                {item.currentAlbum.artistName}
              </p>
              <div className="remove-item-container">
                <button onClick={() => removeCartItem(item.currentAlbum)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
