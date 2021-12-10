import React, { useState } from "react";

import "../../css/CartBadge.css";

import CartItems from "../CartItems";
import { useAddToCartContext } from "../../providers/AddToCartProvider";

function CartBadge() {
  const [isQuickCartShown, setIsQuickCartShown] = useState(false);
  const { cart } = useAddToCartContext();

  const showQuickCart = () => {
    setIsQuickCartShown(!isQuickCartShown);
  };

  return (
    <>
      <div
        onClick={showQuickCart}
        className="cart-badge"
        style={{
          border: isQuickCartShown ? "1px solid rgb(7, 188, 233)" : null,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "rgb(7, 188, 233)",
        }}
      >
        {" "}
        <p>{cart.length}</p>
      </div>

      {isQuickCartShown && <QuickCartView />}
    </>
  );
}

function QuickCartView() {
  return (
    <div className="quick-cart-container">
      <h3 id="quick-cart-title" style={{ textAlign: "center" }}>
        Your Cart
      </h3>

      <CartItems />
    </div>
  );
}

export default CartBadge;
