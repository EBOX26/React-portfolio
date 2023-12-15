import React, { useState } from 'react';

// Functional component for the Contact form
export default function Contact() {
  // State variables for form data and errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  // Styles for various components
  const containerStyle = {
    // Main container style
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
    // Form container style
    width: '90%',
    maxWidth: '600px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
    backgroundColor: 'aqua',
    padding: '20px',
    margin: '20px auto',
  };

  const labelStyle = {
    // Label container style
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };

  const inputStyle = {
    // Input field style
    padding: '10px',
    fontSize: '14px',
  };

  const errorMessageStyle = {
    // Error message style
    color: 'red',
  };

  const notificationStyle = {
    // Notification message style
    color: 'red',
    textAlign: 'center',
  };

  const submitButtonContainerStyle = {
    // Submit button container style
    textAlign: 'center',
  };

  const submitButtonStyle = {
    // Submit button style
    padding: '12px',
    fontSize: '18px',
    borderRadius: '10px',
    backgroundColor: 'aqua',
    color: 'black',
    cursor: 'pointer',
    width: '40%',
    border: 'none',
  };

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validate and update errors
    let updatedErrors = {};

    const isValueEmpty = value.trim() === '';
    const isInvalidEmail = name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (isValueEmpty) {
      updatedErrors = {
        ...updatedErrors,
        [name]: `${name} is required`,
      };
    }

    if (isInvalidEmail) {
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

  // Event handler for input blur (on focus out)
  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Update errors based on input blur
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === '' ? `${name} is required` : null,
    }));
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for validation errors
    if (Object.values(errors).some((error) => error !== '')) {
      console.error('Form has validation errors. Please correct them.');
      return;
    }

    // Log and alert upon successful form submission
    console.log('Form submitted with data:', formData);
    alert('Data Submitted');
  };

  // JSX rendering of the Contact component
  return (
    <div style={containerStyle}>
      <h3>Contact</h3>
      <form onSubmit={handleSubmit} style={formStyle}>
        {/* Input field for Name */}
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
          {/* Display error message for Name, if any */}
          {errors.name && (
            <span style={errorMessageStyle}>{errors.name}</span>
          )}
        </label>
        {/* Input field for Email */}
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
          {/* Display error message for Email, if any */}
          {errors.email && (
            <span style={errorMessageStyle}>{errors.email}</span>
          )}
        </label>
        {/* Input field for Message */}
        <label style={labelStyle}>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </label>
        {/* Container for the Submit button */}
        <div style={submitButtonContainerStyle}>
          <button type="submit" style={submitButtonStyle}>
            Submit
          </button>
        </div>
        {/* Display notification if there are errors in Name or Email */}
        {(errors.name || errors.email) && (
          <div style={notificationStyle}>
            Please fill in the required fields.
          </div>
        )}
      </form>
    </div>
  );
}

