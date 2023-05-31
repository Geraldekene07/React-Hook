import React from 'react'

const Register = () => {
  return (
    <div className="col-md-6 offset-md-3">
        <h1 className="text-center">Register</h1>
        <input 
        className='form-control'
        type="text"
        id='firstName' 
        name='firstName' 
        placeholder='First Name'
        value={firstName}
        onChange={handleChange}
        />
    </div>
  )
}

export default Register