import React from 'react';
import styled from 'styled-components';
import NavbarBottom from '../../src/components/Navbar/NavbarBottom';
import backgroundImg from '../../public/imgicons/police_blackandwhite.jpg';
import './PrivacyPolicy.css';

const BackgroundContainer = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0;
  height: 100vh;
  width: 100%;
`;

const PrivacyPolicy = () => {

    return (
        <div>
            <NavbarBottom />
            <BackgroundContainer>
            <div className="container">
        <h1><strong>Privacy Policy</strong></h1>
        <p>At RentForces, we are committed to ensuring the privacy and security of our users' personal information. This Privacy Policy outlines how we collect, use, and protect the data we collect from our users. By using our platform, you consent to the practices described in this Privacy Policy.</p>
        <ul>
            <li>
                <strong>Information We Collect</strong>
                <p>When you use our platform, we may collect certain personal information from you, including but not limited to your name, email address, and contact details. We may also collect non-personal information such as your IP address, browser type, and operating system for analytical purposes.</p>
            </li>
            <li>
                <strong>How We Use Your Information</strong>
            <p>We use the information we collect to provide and improve our services, customize your experience on our platform, and communicate with you about updates, promotions, and relevant information. We may also use your information to analyze user behavior, troubleshoot technical issues, and enforce our terms and conditions.</p>
               </li>
               <li>
                <strong>Data Security</strong>
            <p>We take data security seriously and implement measures to protect your personal information from unauthorized access, disclosure, or alteration. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            </li>
            <li>
                <strong>Sharing Your Information</strong>
                <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes. However, we may share your information with trusted service providers who assist us in operating our platform and providing services to you. These service providers are bound by confidentiality agreements and are not allowed to use your information for any other purpose.</p>
            </li>
            <li>
                <strong>Your Choices</strong>
                <p>You have the right to access, update, and delete your personal information. You may also choose to opt-out of receiving promotional emails from us by following the unsubscribe instructions provided in the email.</p>
            </li>
            
                <strong>Changes to the Privacy Policy</strong>
                <p></p>
           
           
                <strong>Contact Us</strong>
                <p>If you have any questions or concerns about our Privacy Policy or our data practices, please contact us at [info@rentforces.com].</p>
               
            
            <strong>Last Updated: [07/22/2023]</strong>
        </ul>       
        </div>
        </BackgroundContainer>
        </div>
    );
}

export default PrivacyPolicy;