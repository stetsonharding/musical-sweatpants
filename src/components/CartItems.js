import React from "react";

import { useAddToCartContext } from "../providers/AddToCartProvider";

export default function CartItems() {
  const { cart } = useAddToCartContext();

  return (
    <div className="glaks" style={{ overflow: "auto", height: "140px" }}>
      {cart.map((item, index) => {
        return (
          <div key={index} className="search-results-flex">
            <div className="cart-item-flex">
              <img src={item.currentAlbum.artworkUrl60} alt="Artist's Album" />
            </div>
            <div
              className="search-result-information"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: "column",
                margin: "0 0 0 10px",
              }}
            >
              <p style={{ padding: "0", margin: "0", fontSize: ".9rem" }}>
                {" "}
                SWEATPANTS - {item.size}
              </p>
              <p style={{ padding: "0", margin: "0", fontSize: ".8rem" }}>
                {item.currentAlbum.collectionName} -{" "}
                {item.currentAlbum.artistName}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
