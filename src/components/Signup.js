import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    date: new Date().toISOString().split("T")[0],
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, date } = credentials;

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        date,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!response.ok) {
      const errorMessage =
        json?.errors?.[0]?.msg || json?.error || "Signup failed";
      alert(errorMessage);
      return;
    }

    localStorage.setItem("token", json.authtoken);
    navigate("/");
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
            <h1>Create account</h1>
            <p>Start organizing your notes in a smarter way.</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="name">Full name</label>
              <input
                type="text"
                name="name"
                value={credentials.name}
                id="name"
                onChange={onChange}
                placeholder="John Doe"
                minLength={3}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                value={credentials.email}
                id="email"
                onChange={onChange}
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                id="password"
                onChange={onChange}
                placeholder="Choose a password"
                minLength={5}
                required
              />
              <small>Password must be at least 5 characters.</small>
            </div>

            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                value={credentials.date}
                id="date"
                onChange={onChange}
                required
              />
            </div>

            <button type="submit" className="auth-submit">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
