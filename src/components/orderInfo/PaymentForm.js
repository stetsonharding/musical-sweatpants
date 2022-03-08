import React from 'react';
//Use Navigate to direct user to another component
import {useNavigate} from "react-router-dom"
//Context
import { useOrderFormContext } from '../../providers/OrderFormProvider';
//Components
import FormInput from '../orderInfo/FormInput'

function PaymentForm() {
  const {paymentData, setPaymentData,} = useOrderFormContext();
  const history = useNavigate();

  return (
<div className="form-container">
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
{/* Direct user to order complete component */}
<button className="action-btn" onClick={() => history('/orderComplete')}>Pay Now</button>
  </div>
  )
}
export default PaymentForm;
