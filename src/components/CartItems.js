import React from "react";
import SearchResults from "../components/builder/FindAlbum";

import { useAddToCartContext } from "../providers/AddToCartProvider";

export default function CartItems() {
  const { cart } = useAddToCartContext();
  return (
    <div>
      {cart.map((item) => (
        <SearchResults item={item} />
      ))}
    </div>
  );
}
