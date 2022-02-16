import React from 'react';
import FormInput from '../orderInfo/FormInput'
import {useHistory} from "react-router-dom"

import { useOrderFormContext } from '../../providers/OrderFormProvider';

function PaymentForm() {

  const {paymentData, setPaymentData, shippingData, setShippingData} = useOrderFormContext();
  const history = useHistory()



  return (
    <div className='payment-form-container' style={{ width: '500px', textAlign: 'center'}}>

<h2 className="heavy-text">Payment Infomation</h2>

<h4 className="feature-title light-text">
  Shipping Address
</h4>

<FormInput
  formData={paymentData}
  inputData={["shipping"]}
  setInputData={setPaymentData}
  placeholder={["Shipping Address"]}
/>

<div className="content-margin">
  <h4 className="feature-title light-text">
    Billing Address
  </h4>
  <FormInput
    formData={paymentData}
    inputData={["billing"]}
    setInputData={setPaymentData}
    placeholder={["Billing Address"]}
  />
</div>

<FormInput
  formData={paymentData}
  inputData={["cardnumber"]}
  setInputData={setPaymentData}
  placeholder={["Carn number"]}
/>
<FormInput
  formData={paymentData}
  inputData={["nameoncard"]}
  setInputData={setPaymentData}
  placeholder={["Name on card"]}
/>
<FormInput
  formData={paymentData}
  inputData={["expiration"]}
  setInputData={setPaymentData}
  placeholder={["Expiration (MM/YY), Security code"]}
/>

<button className="action-btn" onClick={() => history.push('/orderComplete')}>Pay Now</button>

    </div>
  )
  

}

export default PaymentForm;
