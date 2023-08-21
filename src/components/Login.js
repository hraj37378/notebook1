import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [credential, setCredential] = useState({email:"",password:""})
    const navigate = useNavigate();
    const host="https://naughty-cod-helmet.cyclic.cloud";
    const onChange=(e)=>{
        setCredential({...credential,[e.target.name]:e.target.value})
    }
    const handleSubmit= async(event)=>{
        event.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body:JSON.stringify({email:credential.email,password:credential.password})
          });
          const json=await response.json();
          if(json.success){
            //Redirect to home page
            localStorage.setItem("token",json.authToken);
            navigate("/")
            props.showAlert("LoggedIn Successfully", "success")
          }
          else{
            props.showAlert("Invalid Credentials", "danger")
          }
          console.log(json);
    }
  return (
    <div className="container mt-3">
      <h2><b>Login To Access StickyNotes </b></h2>
  <form  onSubmit={handleSubmit}>
  <div className="form-group my-3">
    <label htmlFor="email"><b>Email</b></label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' onChange={onChange} value={credential.email} placeholder="Enter email"/>
  </div>
  <div className="form-group my-3">
    <label htmlFor="password"><b>Password</b></label>
    <input type="password" className="form-control" id="password" name='password' onChange={onChange} value={credential.password} placeholder="Password"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
  )
}

export default Login