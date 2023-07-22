import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SignIn.css';

const Signin = () => {
    return (
        <div className="signin-container">
              <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <strong>Email address</strong></Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
           
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label><strong>Password</strong></Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
        </Form.Group>
  
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
        </div>
    );
}

export default Signin;