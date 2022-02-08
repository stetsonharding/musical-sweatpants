import React from 'react';
import { useOrderFormContext } from '../../providers/OrderFormProvider';


function OrderComplete() {
  const {shippingData} = useOrderFormContext();
  
  return (
    <>
    <div style={{height: '90vh'}}>
  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', flexDirection:'column'}}>
<div>
    <h1>Thank you for your order, {shippingData.firstname} {shippingData.lastname}!</h1>
    </div>

    <div>
    
    <button>Start Over</button>

    </div>


</div>

</div>
  </>

  )
}

export default OrderComplete;
