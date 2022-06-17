import React from "react";
//components
import CartBadge from "../builder/CartBadge";
import OrderDetails from "./OrderDetails";
import ShippingForm from "./ShippingForm";

//css
import "../../css/OrderInfoLayout.css";

export default function OrderInfoLayout() {
  return (
    <div className="order-info-container">
      <div>
        <CartBadge />
      </div>
      <div className="order-info">
        <OrderDetails />

        <ShippingForm />
      </div>
    </div>
  );
}
