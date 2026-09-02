import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response;
    try {
      response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
    } catch (error) {
      props.showAlert("Unable to connect. Please try again.", "error");
      return;
    }

    const json = await response.json();

    if (!response.ok) {
      props.showAlert(
        json?.errors?.[0]?.msg ||
          (typeof json?.error === "string"
            ? json.error
            : json?.error?.message) ||
          "Login failed",
        "error",
      );
      return;
    }

    localStorage.setItem("token", json.authtoken);
    if (json.success) {
      props.onAuthSuccess(json.name);
      props.showAlert("Welcome back. Login successful.", "success");
      navigate("/");
    } else {
      props.showAlert("Invalid credentials", "error");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-card__glow" aria-hidden="true" />
        <div className="auth-card__content">
          <div className="auth-badge">Inotebook</div>

          <div className="auth-header">
            <h1>Welcome back</h1>
            <p>Sign in to continue to your workspace.</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                value={credentials.email}
                id="email"
                onChange={onChange}
                aria-describedby="emailHelp"
                placeholder="name@example.com"
                required
              />
              <small id="emailHelp">
                We’ll never share your email with anyone else.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={onChange}
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="auth-submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
