import React from "react";
//Context
import { useAddToCartContext } from "../providers/AddToCartProvider";
//css
import "../css/CartItem.css";

export default function CartItems() {
  const { cart, removeCartItem } = useAddToCartContext();

  return (
    <div className="cart-item-container">
      {/*Iterate through cart array, display data */}
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
                {/* Removed item from cart, function is imported and called from context */}
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
