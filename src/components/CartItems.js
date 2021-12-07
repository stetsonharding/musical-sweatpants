import React from "react";

import { useAddToCartContext } from "../providers/AddToCartProvider";

export default function CartItems() {
  const { cart } = useAddToCartContext();
  return (
    <div>
      {cart.map((item, index) => {
        return (
          <div key={index} className="search-results-flex">
            <div className="search-result-image">
              <img src={item.currentAlbum.artworkUrl60} alt="Artist's Album" />
            </div>
            <div className="search-result-information">
              <p>{item.currentAlbum.collectionName}</p>
              <p>{item.currentAlbum.artistName}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
