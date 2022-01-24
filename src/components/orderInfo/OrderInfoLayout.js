import React from "react";

import { useCurrentAlbumContext } from "../../providers/CurrentAlbumProvider";
//components
import CartBadge from "../builder/CartBadge";
import OrderDetails from "./OrderDetails";
import ShippingForm from "./ShippingForm"

export default function OrderInfoLayout() {
  const [currentAlbum] = useCurrentAlbumContext();
  
  return (
   
    <div>
     <CartBadge />
     <div style={{display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'space-evenly' }}>
      <OrderDetails /> 
      <ShippingForm/>
      </div>

    </div>
 
    
   
  );
}
