import React, { useEffect, useState } from "react";
import { NavLink,useNavigate } from "react-router";
import axios from "axios";
import Home from "./Home";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Note: passport-local-mongoose doesn't require a password field in schema
        const response = axios.post("http://localhost:3002/signup",{
            username:username,
            email:email,
            password:password
        });
        console.log(response);
        navigate("/home"); // Redirect to the Home page
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card p-4 border-0 text-white w-100" style={{ maxWidth: "400px", background: "#111827" }}>
        <h4 className="fw-bold mb-1">Create Account</h4>
        <p className="small mb-4">Join the PostSphere community today</p>
        
        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label className="form-label  small text-uppercase fw-semibold">Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} class="form-control bg-dark border-secondary text-white custom-input" placeholder="johndoe" required />
          </div>

          <div className="mb-3">
            <label className="form-label  small text-uppercase fw-semibold">Email address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control bg-dark border-secondary text-white custom-input" placeholder="name@example.com" required />
          </div>
          
          <div className="mb-4">
            <label className="form-label  small text-uppercase fw-semibold">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control bg-dark border-secondary text-white custom-input" placeholder="••••••••" required />
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-semibold mb-3" style={{ background: "#2563eb", border: "0" }}>Register</button>
        </form>

        <p className="text-center small  mb-0">
          Already have an account? <NavLink to="/login" className="text-primary text-decoration-none">Log In</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
