import React from 'react';
import styled from 'styled-components';
import NavbarBottom from '../../src/components/Navbar/NavbarBottom';
import backgroundImg from '../../public/imgicons/police_blackandwhite.jpg'


const BackgroundContainer = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0;
  height: 100vh;
  width: 100%;
`;

const CenteredContent = styled.div`
  text-align: center;
  margin-top: 550px; 
  font-size: 29px;
  h1 {
    margin-bottom: 20px;
  } 

  p {
    margin-bottom: 60px;
    font-size: 30px;
  }

  strong {
    margin-bottom: 29px;
  }

`;

const ContactUs = () => {

    return (
        <div>
        <NavbarBottom />
        <BackgroundContainer>
        <div className="container">
        <CenteredContent>
        <h1>Contact - Rent Forces</h1>
        <p>If you have any questions or inquiries, please feel free to contact us at:</p>
        <strong>info@rentforces.com</strong>
        <p>Thank you for reaching out to us! We have received your message and will get back to you shortly.</p>
        </CenteredContent>
        </div>
        </BackgroundContainer>
        </div>
    );
}

export default ContactUs;