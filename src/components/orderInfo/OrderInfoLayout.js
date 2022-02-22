import React, {useState} from "react";
//components
import CartBadge from "../builder/CartBadge";
import OrderDetails from "./OrderDetails";
import ShippingForm from "./ShippingForm"
import BillingForm from "./BillingForm";
import PaymentForm from "./PaymentForm";

import "../../css/OrderInfoLayout.css"

export default function OrderInfoLayout() {
 
  const [show, setShow] = useState(0)
  return (
    <div className='order-info-container'>
      <CartBadge />

      <div className="order-info">
        <OrderDetails /> 
        {show === 0 ? <ShippingForm setShow={setShow}/> : show === 1 ? <BillingForm setShow={setShow}/> : show === 2 ? <PaymentForm /> : null }
      </div>

    </div>

  );

}
