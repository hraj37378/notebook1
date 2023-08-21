import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [credential, setCredential] = useState({ name:"",email: "", password: "", cpassword:"" });
  const navigate = useNavigate();
  const host = "https://naughty-cod-helmet.cyclic.cloud";
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const {name,email,password}=credential;
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,email,password
      }),
    });
    const json = await response.json();
    if (json.success) {
      //Redirect to home page
      //localStorage.setItem("token", json.authToken);
      navigate("/login");
      props.showAlert("Account Created Successfully", "success")
    }
    else{
      props.showAlert("Invalid Details of User", "danger")
    }
    console.log(json);
  };
  return (
    <div className="container mt-3">
      <h2><b>Create Your Account </b></h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group my-2">
          <label htmlFor="exampleInputEmail1">
            <b>Name</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
            name="name"
            placeholder="Enter Your Name"
            onChange={onChange}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="email">
            <b>Email address</b>
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            placeholder="Enter email"
            onChange={onChange}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
            required
            minLength={5}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="password">
            <b>Confirm Password</b>
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            placeholder="Confirm Password"
            onChange={onChange}
            required
            minLength={5}
          />
        </div>

        <button type="submit" className="btn btn-primary my-2">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
