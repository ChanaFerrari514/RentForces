import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, useLocation } from 'wouter';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import backgroundImg from '../../public/imgicons/police_blackandwhite.jpg';
import './SignUpForm.css';

const BackgroundContainer = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100%;
`;


const SignUpForm = ({ setIsLoggedIn }) => {
  const location = useLocation(); // Pour accéder à la localisation (l'URL)

  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    axios.post('http://127.0.0.1:4000/auth/signup', formData)
      .then((response) => {
      	console.log(response.data);
      	localStorage.removeItem('access_token');
      	localStorage.setItem('access_token', response.data.access_token);
        // Rediriger vers la page UserDashboard en cas de succès
        location[1]('/user-dashboard');
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        // Gérez les erreurs ici si nécessaire
      });
  };

  return (
    <BackgroundContainer>
    <div className="signup-container">
      
      <Form onSubmit={handleSubmit}>
      <p>
       You already have an account? <Link to="/sign-in">Sign In</Link>
      </p>
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
    </BackgroundContainer>
  );
};

export default SignUpForm;
