import React from 'react'
//css
import "../../css/FormInput.css"

function FormInput({formData, inputData, setInputData, placeholder}) {

  //Get value from current form, whatever the name is of that form, add the value we got to it.
function handleChange(e) {
  const value = e.target.value
  setInputData({
    ...formData,
    [e.target.name]: value
  })
}

  return (
    <div className='form-input-flex'>
      {/* Iterate though input data array, with the given information, create a form using supplied data. */}
      {inputData.map((data, index) => {
        return (
          <div key={placeholder[index]}
          className='input-container'
          >
            <input
            placeholder={placeholder[index]}
            type='text'
            name={inputData[index]}
            value={inputData[data]}
            className='input'
            onChange={handleChange}
            />
            </div>
          )
      })}
    </div>
  )
}
export default FormInput

