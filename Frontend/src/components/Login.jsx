// src/components/Auth/Login.jsx
import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { AuthContext } from "../context/AuthContext"

const Login = () => {

  const {login} = useContext(AuthContext)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post("http://localhost:3000/api/auth/login",formData)
      console.log(":- response.data", response.data)
      if (response.status === 200) {

        await login(response.data.data.user,response.data.data.token)
        setMessage(response?.data?.message)
        navigate("/")
      }
      // setMessage(response.data)
    } catch (err) {
      console.log("err",err)
      setMessage(err?.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <>
      <Link to="/">
              <Button variant="secondary">Back</Button>
        </Link>
      <div className="container d-flex justify-content-center align-items-center vh-100">
       
      <div className="card p-4 shadow-lg">
        <h2 className="text-center mb-4">Login</h2>
        {message && <div className="alert alert-danger">{message}</div>}
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" className="form-control mb-3" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" className="form-control mb-3" placeholder="Password" onChange={handleChange} required />
          <button className="btn btn-primary w-100" type="submit">Login</button>
        </form>
      </div>
    </div>
    </>
    
  );
};

export default Login;
