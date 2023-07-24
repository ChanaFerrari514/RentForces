import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SignUpForm.css';
import axios from 'axios';

const SignUpForm = () => {


  const [formData, setFormData] = useState({
    //firstName: '',
    //lastName: '',
    email: '',
    username: '',
    password: '',
    //confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [responseMessage, setResponseMessage] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoie les données du formulaire au backend en utilisant Axios
    fetch('http://127.0.0.1:4000/auth/signup',{
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
      // Traitez la réponse du serveur ici si nécessaire
      setResponseMessage(data.message);
      console.log(response.data);
    })
      .catch((error) => {
      // Traitez les erreurs ici si nécessaire
      console.error(error);
      setResponseMessage('An error occurred during registration.');
    });
};
  

  return (
    <div className="signup-container">
  {responseMessage && <p>{responseMessage}</p>}

  <Form onSubmit={handleSubmit}>
      <Form.Group controlId="username">
        <Form.Label><strong>Username</strong></Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
       

        
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label><strong>Email Address</strong></Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label><strong>Password</strong></Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
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


