// src/components/Auth/Signup.jsx
import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { AuthContext } from "../context/AuthContext"
const Signup = () => {

  const {Signup} = useContext(AuthContext)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name:"", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post("http://localhost:3000/api/auth/signup",formData)
      console.log(":- response.data", response.data)
      if (response.status === 200) {

        await Signup(response.data.data.user,response.data.data.token)
        setMessage(response?.data?.message)
        navigate("/")
      }
      setMessage(response.data.message);
      setMessage("");
    }
     catch (err) {
      console.log("err", err);
      setMessage(err?.response?.data?.message || "An error occurred.");
    }
  };
  return (
    <>
      <Link to="/">
              <Button variant="success">Back</Button>
        </Link>
      <div className="container d-flex justify-content-center align-items-center vh-100">
         
      <div className="card p-4 shadow-lg bg-dark">
        <h2 className="text-center mb-4 text-light">Signup</h2>
        {message && <div className="alert alert-info">{message}</div>}
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" className="form-control mb-3" placeholder="Name" onChange={handleChange} required />
          <input type="email" name="email" className="form-control mb-3" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" className="form-control mb-3" placeholder="Password" onChange={handleChange} required />
          <button className="btn btn-primary w-100">Signup</button>
        </form>
      </div>
    </div>
    </>
    
  );
};

export default Signup;
