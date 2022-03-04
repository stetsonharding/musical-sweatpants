import React from 'react';
//useNavigate to redirect back to home page.
import { Link } from "react-router-dom";
//context
import { useOrderFormContext } from '../../providers/OrderFormProvider';
import { useCurrentAlbumContext } from "../../providers/CurrentAlbumProvider"
import { useSweatpantSizeContext } from "../../providers/SweatpantSizeProvider";
import { useAddToCartContext } from "../../providers/AddToCartProvider";
//css
import "../../css/MainContent.css";

//Component Displaying thank you message to user displaying first and last name of user.
function OrderComplete() {
  const [setCurrentAlbum] = useCurrentAlbumContext();
  const { setCart } = useAddToCartContext();
  const { setSweatpantSize } = useSweatpantSizeContext();
  const {shippingData} = useOrderFormContext();


//resetting state values
  const handleStartOver = () =>{
    setCurrentAlbum(null)
    setCart([])
    setSweatpantSize("")
  }
  return (
    <>
  <div>
    <div className="order-complete-msg">
      <div>
        <h1>Thank you for your order, {shippingData.firstname} {shippingData.lastname}!</h1>
      </div>
    <Link
    onClick={() => handleStartOver()}
    to="/musical-sweatpants"
    >
    <button className='action-btn'>Start Over</button>
    </Link>
    </div>
  </div>
  </>
  )
}
export default OrderComplete;
