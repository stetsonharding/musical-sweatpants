import React from 'react';
import { useOrderFormContext } from '../../providers/OrderFormProvider';
import FormInput from './FormInput';

import "../../css/FormInput.css"

export default function BillingForm({setShow}) {

  const {shippingData, setBillingData, billingData, setShippingData} = useOrderFormContext();




  const checkboxClick = (e) => {
 setBillingData(shippingData)
}

const handleClick = () =>{

  setShow(2)

}

console.log(billingData)
 console.log(shippingData)
  return (

<>

<div className="form-container">
<h2 className="title-bold" style={{textAlign: 'center'}}>Billing Information</h2>

<div className="checkbox">
{/* <input type="checkbox" name="SameAsShipping" onClick={() => checkboxClick()} />
<label htmlFor='sameAsShipping'>Same as Shipping Address </label> */}
</div>

<FormInput
formData={billingData}
inputData={['firstname', 'lastname']}
setInputData={setBillingData}
placeholder={['First Name', 'Last Name']}

/>


<FormInput
formData={billingData}
inputData={['address']}
setInputData={setBillingData}
placeholder={['Address']}
/>

<FormInput
formData={billingData}
inputData={['subaddress']}
setInputData={setBillingData}
placeholder={['Sub Address']}
/>
<FormInput
formData={billingData}
inputData={['city']}
setInputData={setBillingData}
placeholder={['City']}
/>
<FormInput
formData={billingData}
inputData={['country']}
setInputData={setBillingData}
placeholder={['County']}
/>
<FormInput
formData={billingData}
inputData={['state']}
setInputData={setBillingData}
placeholder={['State']}
/>
<FormInput
formData={billingData}
inputData={['zip']}
setInputData={setBillingData}
placeholder={['Zip']}
/>

<button  className="action-btn" onClick={() => handleClick()}>Continue to Payment</button>
</div>
</>
  )
}
