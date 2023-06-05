import React,{useState}  from "react";
import axios from "axios";
import { toast } from 'react-toastify';


const Register = () => {
//creating an object of registration data
const iniatialState= {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}
//useState
const [formdata,setFormData] = useState (iniatialState);

//onChange handler
const handleChange = (e) => {
  e.preventDefault()
  console.log(e.target);
  const {name, value} = e.target
  setFormData({[name]: value})
  
}
//Accessing the state values by destructing the state
const {firstName, lastName, email, password} = formdata

//form validation
const handleSubmit = async (e) =>{
  e.preventDefault()
  //handle form submission
  try{
    const {data} = await axios.post("example/api/v1/post",{
      firstName,
      lastName,
      email,
      password
    });
    console.log(data); // from the data base
    if(data?.error){


  }
}catch(error) {
  console.log(error);
}

if(firstName.length >= 5){
  toast.success("First Name Ok!")
}
}

  // const [firstName, setFirstName] = useState('')
  //  const handleChange = (event) => {
  //   const value = event.target.value 
  //   setFirstName(value)
  //   }
  // const [lastName, setLastName] = useState('')
  //  const handleLast = (event) => {
  //   const value = event.target.value 
  //   setLastName(value)
  //   }
  // const [email, setEmail] = useState('')
  //  const handleEmail = (event) => {
  //   const value = event.target.value 
  //   setEmail(value)
  //   }
  // const [password, setPassword] = useState('')
  //  const handlePass = (event) => {
  //   const value = event.target.value 
  //   setPassword(value)
  //   }
  return (
    <div className="col-md-6 offset-md-3">
      <h1 className="text-center">Register</h1>
      <div className="mb-3 bg-light">
        <input
          className="form-control "
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={handleChange}
        />
         {/* {firstName && <strong><h1>{firstName}</h1></strong>} */}
      </div>
      <div className="bg-light">
        <input
          className="form-control my-3"
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={handleChange}
        />
        {/* {lastName && <strong><h1>{lastName}</h1></strong>} */}
      </div>
      <div className="my-3 bg-light">
        <input
          className="form-control "
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={handleChange}
        />
        {/* {email && <strong><h1>{email}</h1></strong>} */}
      </div>
      <div className="bg-light">
        <input
          className="form-control "
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={handleChange}
        />
        {/* {password && <strong>{password}</strong>} */}
      </div>  
    </div>
  );
};

export default Register;