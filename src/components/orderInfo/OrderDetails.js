import React from "react";
//Context
import { useAddToCartContext } from "../../providers/AddToCartProvider";
//css
import "../../css/OrderDetails.css";

export default function OrderDetails() {
  const { cart } = useAddToCartContext();

  //pricing
  const subTotal = cart.length * 60;
  const shipping = 5.0;
  const taxes = subTotal / 10;
  const grandTotal = subTotal + shipping + taxes;

  return (
    <div className="order-details-container">
      <h3>Order Details</h3>
    <div className='order-container'>
      {/* Iterate through cart items, display each item. */}
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
            </div>
          </div>
        );
      })}
        </div>
     {/*pricing about users order. */}
      <div className="order-details-pricing-container">
        <hr />
        <div className="order-details-price">
          <h5>Sub Total</h5>
          <h4>${subTotal}</h4>
        </div>
        <div className="order-details-price">
          <h5>Shipping</h5>
          <h4>${shipping}</h4>
        </div>
        <div className="order-details-price">
          <h5>Taxes(10%)</h5>
          <h4>${taxes}</h4>
        </div>
        <div className="order-details-price">
          <h4 id="grand-total">Grand Total</h4>
          <h4 id="grand-total">${grandTotal}</h4>
        </div>
      </div>
    </div>
  );
}
