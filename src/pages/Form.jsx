import React,{useState} from 'react'

const Form = () => {
    //initial state
    const [firstName, setFirstName] = useState('')
   const handleChange = (event) => {
    const value = event.target.value 
    setFirstName(value)
    console.log(firstName);
   }
  return (
    <div className='col-md-6 offset-3'>
        <label htmlFor="">First Name: </label>
        <input 
        className='form-control'
        type="text"
        id='firstName' 
        name='firstName' 
        placeholder='First Name'
        value={firstName}
        onChange={handleChange}
        />
        
        {firstName.length>=5 && <strong>{firstName}</strong>}
        {/* {firstName.length>=5?<h1>{firstName}</h1>:""} */}
        {/* {firstName.length>5} */}

    </div>
  )
}

export default Form