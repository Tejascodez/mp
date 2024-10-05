// src/FormValidation.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const FormValidation = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (formData.fullName.length < 5) {
      newErrors.fullName = "Name must not be less than 5 characters";
    }
    if (!formData.email.includes('@')) {
      newErrors.email = "Enter a correct email";
    }
    if (formData.phone === '123456789' || formData.phone.length !== 10) {
      newErrors.phone = "Phone number should not be 123456789 and must be a 10-digit number";
    }
    if (formData.password.length < 8 || formData.password === 'password' || formData.password === formData.fullName) {
      newErrors.password = "Password is not strong";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password and confirm password should match";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form
      console.log('Form submitted', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <small className="text-danger">{errors.fullName}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <small className="text-danger">{errors.phone}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <small className="text-danger">{errors.password}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <br/>
          {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
