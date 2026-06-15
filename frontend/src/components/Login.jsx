import React, { useState } from "react";
import { NavLink } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    // Add passport auth integration here
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card p-4 border-0 text-white w-100" style={{ maxWidth: "400px", background: "#111827" }}>
        <h4 className="fw-bold mb-1">Welcome Back</h4>
        <p className=" small mb-4">Login to your PostSphere account</p>
        
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label  small text-uppercase fw-semibold">Email address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control bg-dark border-secondary text-white custom-input" placeholder="name@example.com" required />
          </div>
          
          <div className="mb-4">
            <label className="form-label  small text-uppercase fw-semibold">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control bg-dark border-secondary text-white custom-input" placeholder="••••••••" required />
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-semibold mb-3" style={{ background: "#2563eb", border: "0" }}>Sign In</button>
        </form>

        <p className="text-center small  mb-0">
          Don't have an account? <NavLink to="/signup" className="text-primary text-decoration-none">Sign Up</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
