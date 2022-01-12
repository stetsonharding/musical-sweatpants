import React from 'react'

function FormInput({formData, inputData, setInputData, placeholder}) {

  //form state
function handleChange(e) {
  const value = e.target.value

  setInputData({
    ...formData,
    [e.target.name]: value
  })
}


  return (
    <div className='form-input-flex'>
      {inputData.map((data, index) => {
          console.log(data)
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

