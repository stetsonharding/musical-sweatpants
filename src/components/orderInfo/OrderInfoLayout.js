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
  const [show, setShow] = useState(true)
  const [showTwo, setShowTwo] = useState(false)
  
  return (
   
    <div>
     <CartBadge />
     <div style={{display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'space-evenly' }}>
      <OrderDetails /> 



      {show ?  <ShippingForm setShow={setShow}/> : <BillingForm setShowTwo={setShowTwo} /> }
    
      </div>

    </div>
 
    
   
  );
}
