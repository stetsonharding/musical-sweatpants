import React, { useState } from "react";

import "../../css/CartBadge.css";

import { Link } from "react-router-dom";

import CartItems from "../CartItems";
import { useAddToCartContext } from "../../providers/AddToCartProvider";

function CartBadge() {
  const [isQuickCartShown, setIsQuickCartShown] = useState(false);
  const { cart, addEffect } = useAddToCartContext();

  const showQuickCart = () => {
    setIsQuickCartShown(!isQuickCartShown);
  };

  return (
    <>
      <div
        onClick={showQuickCart}
        className="cart-badge"
        id={addEffect && "blinking"}
      >
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
      {/* Total Price */}
      <div
        className="cart-total-price"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <p id="total-price">Total:</p>
        <p>${totalPrice(cart)}</p>
      </div>
      {/* ======== */}
      {/* shopping cart message */}
      <div
        className="message-container"
        style={{ textAlign: "center", fontSize: ".8rem" }}
      >
        {cart.length === 0 && (
          <p className="shopping-cart-message">
            Please add items to your shopping cart before checkout.
          </p>
        )}
      </div>
      {/* ======== */}

      {/* Checkout button */}
      <div className="checkout-btn">
        <Link to="orderDetails">
          <button disabled={cart.length === 0 ? true : false}>Checkout</button>
        </Link>
      </div>
      {/* ======== */}
    </div>
  );
}

export default CartBadge;
