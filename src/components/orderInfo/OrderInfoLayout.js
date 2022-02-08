import React, {useState} from "react";

import { useCurrentAlbumContext } from "../../providers/CurrentAlbumProvider";
//components
import CartBadge from "../builder/CartBadge";
import OrderDetails from "./OrderDetails";
import ShippingForm from "./ShippingForm"
import BillingForm from "./BillingForm";
import PaymentForm from "./PaymentForm";


export default function OrderInfoLayout() {
  const [currentAlbum] = useCurrentAlbumContext();
  const [show, setShow] = useState(0)

  
  return (
   
    <div>
     <CartBadge />
     <div style={{display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'space-evenly' }}>
      <OrderDetails /> 



      {show === 0 ? <ShippingForm setShow={setShow}/> : show === 1 ? <BillingForm setShow={setShow}/> : show === 2 ? <PaymentForm /> : null }
    
      </div>

    </div>
 
    
   
  );
}
