import React, {useState} from "react";
//components
import CartBadge from "../builder/CartBadge";
import OrderDetails from "./OrderDetails";
import ShippingForm from "./ShippingForm"
import BillingForm from "./BillingForm";
import PaymentForm from "./PaymentForm";
//css
import "../../css/OrderInfoLayout.css"

export default function OrderInfoLayout() {
  //State to condionally render forms.
  const [isFormShown, setIsFormShown] = useState(0)

  return (
    <div className='order-info-container'>
      <div>
      <CartBadge />
      </div>
      <div className="order-info">
        <OrderDetails /> 
        {/* Conditionally rendering checkout forms */}
        {isFormShown === 0 ? <ShippingForm setIsFormShown={setIsFormShown}/> : isFormShown === 1 ? <BillingForm setIsFormShown={setIsFormShown}/> : isFormShown === 2 ? <PaymentForm /> : null }
      </div>
    </div>
  );
}
