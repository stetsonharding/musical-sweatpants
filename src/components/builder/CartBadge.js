import React, { useState } from "react";
//css
import "../../css/CartBadge.css";
//router
import { Link } from "react-router-dom";
//components
import CartItems from "../CartItems";
//context
import { useAddToCartContext } from "../../providers/AddToCartProvider";

//Cart Badge shows how many items are in users shopping cart.
function CartBadge() {
  const [isQuickCartShown, setIsQuickCartShown] = useState(false);
  const { cart, addEffect } = useAddToCartContext();

  //When clicked on shopping cart, display quick cart view.
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

//Quick cart view shows the items in cart, and users total.
function QuickCartView() {
  const { cart } = useAddToCartContext();

  //Iterates through cart items, adds each item's price, to total price.
  const totalPrice = (cart) => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price;
    }
    return total;
  };

  return (
    <div className="quick-cart-container">
      <h3 id="quick-cart-title">
        Your Cart
      </h3>
     
     {/* Cart Item displays users items in cart. */}
      <CartItems />

      {/* Total Price */}
      <div className="cart-total-price">
        <p id="total-price">Total:</p>
        <p>${totalPrice(cart)}</p>
      </div>
    
      {/* shopping cart message */}
      <div
        className="message-container"
        style={{ textAlign: "center", fontSize: ".8rem" }}
      >
        {/* Display Message when nothing is in the cart. */}
        {cart.length === 0 && (
          <p className="shopping-cart-message">
            Please add items to your shopping cart before checkout.
          </p>
        )}
      </div>
    
      {/* Checkout button will be disabled if nothing is in users cart */}
      <div className="checkout-btn">
        <Link to="orderDetails">
          <button disabled={cart.length === 0 ? true : false}>Checkout</button>
        </Link>
      </div>
    </div>
  );
}
export default CartBadge;
