// src/SignUpForm.js
import React, { useState, useEffect } from "react";
import "./SignUpForm.css"; 


function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Update document title when form is submitted
  useEffect(() => {
    if (submitted) {
      document.title = "Sign-Up Successful!";
    } else {
      document.title = "Sign-Up Form";
    }
  }, [submitted]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form submitted:", formData);
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>

      {submitted && (
        <div className="confirmation-message">
          <h3>Thank you for signing up!</h3>
          <p>Your form has been successfully submitted.</p>
        </div>
      )}
    </div>
  );
}

export default SignUpForm;

