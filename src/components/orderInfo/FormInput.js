import React from 'react'

function FormInput({formData, inputData, setInputData, placeholder}) {

  const formStyle ={
  borderRadius:'10px',
  padding: '10px',
  width: '90%',
  margin: '.2rem',
  boxShadow: '1px 1px 1px  black',
  border: 'none'
  }

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
          // console.log(data)
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
            style={formStyle}
            />
            </div>
        
        )
      })}
    </div>
  )
}
export default FormInput

