import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SignUpForm.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server
    console.log(formData);
  };

  return (
    <div className="signup-container">
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="firstName">
        <Form.Label><strong>First Name</strong></Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
       
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label><strong>Last Name</strong></Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label><strong>Email Address</strong></Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label><strong>Password</strong></Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="confirmPassword">
        <Form.Label><strong>Confirm Password</strong></Form.Label>
        <Form.Control
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
    </div>
  );
};

export default SignUpForm;


