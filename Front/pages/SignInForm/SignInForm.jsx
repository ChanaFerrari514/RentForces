import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useLocation } from 'wouter';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import backgroundImg from '../../public/imgicons/police_blackandwhite.jpg';
import './SignInForm.css'; 


const BackgroundContainer = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100%;
`;

const SignInForm = ({ setIsLoggedIn }) => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:4000/auth/signin', formData)
      .then((response) => {
      	console.log(response.data);
      	localStorage.removeItem('access_token');
      	localStorage.setItem('access_token', response.data.access_token);
				//localStorage.setItem('refresh_token', response.data.refresh);
        // Rediriger vers le tableau de bord de l'utilisateur en cas de succès
        location[1]('/user-dashboard');
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        console.log(error.response);
        // Gérer les erreurs ici si nécessaire
      });
  };
  

  return (

    <BackgroundContainer>
    <div className="signin-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><strong>Email address</strong></Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><strong>Password</strong></Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </div>
    </BackgroundContainer>
  );
};

export default SignInForm;
