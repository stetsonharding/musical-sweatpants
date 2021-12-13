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
  const { cart } = useAddToCartContext();

  //get total price
  const totalPrice = (cart) => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price;
    }
    return total;
  };

  return (
    <div className="quick-cart-container">
      <h3 id="quick-cart-title" style={{ textAlign: "center" }}>
        Your Cart
      </h3>

      <CartItems />

      <div
        className="cart-total-price"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <p id="total-price">Total:</p>
        <p>${totalPrice(cart)}</p>
      </div>
      <div className="checkout-btn">
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default CartBadge;
