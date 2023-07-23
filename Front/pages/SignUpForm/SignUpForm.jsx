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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoie les données du formulaire au backend en utilisant Axios
    axios.post('http://127.0.0.1:4000/auth/signup', formData)
    .then((response) => {
      // Traitez la réponse du serveur ici si nécessaire
      console.log(response.data);
    })
    .catch((error) => {
      // Traitez les erreurs ici si nécessaire
      console.error(error);
    });
};
  

  return (
    <div className="signup-container">
  
  <Form onSubmit={handleSubmit}>
      <Form.Group controlId="username">
        <Form.Label><strong>Username</strong></Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={formData.username}
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

      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
    </div>
  );
};

export default SignUpForm;


