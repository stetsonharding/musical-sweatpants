import React from 'react';
import { useOrderFormContext } from '../../providers/OrderFormProvider';
import FormInput from './FormInput';



export default function BillingForm() {

  const {shippingData, setBillingData, billingData, setShippingData} = useOrderFormContext();




  const checkboxClick = (e) => {

 setBillingData({
  // const value = e.target.value
  // setInputData({
  //   ...formData,
  //   [e.target.name]: value
  // })

  //when box is clicked, add all shipping data to billing data.
 })
 

  
}

console.log(billingData)
 console.log(shippingData)
  return (

<>

<div className="shipping-form-container" style={{ width: '500px', textAlign: 'center'}}>
<h2 className="title-bold" style={{textAlign: 'center'}}>Billing Information</h2>

<div className="checkbox">
<input type="checkbox" name="SameAsShipping" onClick={() => checkboxClick()} />
<label htmlFor='sameAsShipping'>Same as Shipping Address </label>
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

<button>Continue to Payment</button>
</div>
</>
  )
}
