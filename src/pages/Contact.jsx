import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    padding: '20px',
    backgroundColor: 'grey',
    borderRadius: '15px',
    marginTop: '20px',
    marginBottom: '20px',
  };

  const formStyle = {
    width: '90%',
    maxWidth: '600px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
    backgroundColor: 'aqua',
    padding: '20px',
    margin: '20px auto',
  };

  const labelStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '14px',
  };

  const errorMessageStyle = {
    color: 'red',
  };

  const notificationStyle = {
    color: 'red',
    textAlign: 'center',
  };

  const submitButtonContainerStyle = {
    textAlign: 'center',
  };

  const submitButtonStyle = {
    padding: '12px',
    fontSize: '18px',
    borderRadius: '10px',
    backgroundColor: 'aqua',
    color: 'black',
    cursor: 'pointer',
    width: '40%',
    border: 'none',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    let updatedErrors = {};

    if (value.trim() === '') {
      updatedErrors = {
        ...updatedErrors,
        [name]: `${name} is required`,
      };
    }

    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      updatedErrors = {
        ...updatedErrors,
        email: 'Invalid email address',
      };
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      ...updatedErrors,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === '' ? `${name} is required` : null,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(errors).some((error) => error !== '')) {
      console.error('Form has validation errors. Please correct them.');
      return;
    }

    console.log('Form submitted with data:', formData);
    alert('Data Submitted');
  };

  return (
    <div style={containerStyle}>
      <h3>Contact</h3>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            style={inputStyle}
          />
          {errors.name && (
            <span style={errorMessageStyle}>{errors.name}</span>
          )}
        </label>
        <label style={labelStyle}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            style={inputStyle}
          />
          {errors.email && (
            <span style={errorMessageStyle}>{errors.email}</span>
          )}
        </label>
        <label style={labelStyle}>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </label>
        <div style={submitButtonContainerStyle}>
          <button type="submit" style={submitButtonStyle}>
            Submit
          </button>
        </div>
        {(errors.name || errors.email) && (
          <div style={notificationStyle}>
            Please fill in the required fields.
          </div>
        )}
      </form>
    </div>
  );
}
