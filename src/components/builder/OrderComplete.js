import React from 'react';
import { useOrderFormContext } from '../../providers/OrderFormProvider';
import {useHistory} from "react-router-dom"
import { useCurrentAlbumContext } from "../../providers/CurrentAlbumProvider"
import { useSweatpantSizeContext } from "../../providers/SweatpantSizeProvider";
import { useAddToCartContext } from "../../providers/AddToCartProvider";

import "../../css/MainContent.css";


function OrderComplete() {
  const [currentAlbum, setCurrentAlbum] = useCurrentAlbumContext();
  const { setCart } = useAddToCartContext();
  const { setSweatpantSize } = useSweatpantSizeContext();
  const {shippingData} = useOrderFormContext();
  const history = useHistory()

//resetting state values, redirection to home page.
  const handlePayNow = () =>{
    setCurrentAlbum(null)
    setCart([])
    setSweatpantSize("")
    history.push('/')

  }
  
  return (
    <>
    <div style={{height: '90vh'}}>
  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', flexDirection:'column'}}>
<div>
    <h1>Thank you for your order, {shippingData.firstname} {shippingData.lastname}!</h1>
    </div>

    <div>
    
    <button className='action-btn' onClick={() => handlePayNow()}>Start Over</button>

    </div>


</div>

</div>
  </>

  )
}

export default OrderComplete;
