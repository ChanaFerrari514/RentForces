import React from 'react';
import styled from 'styled-components';
import NavbarBottom from '../../src/components/Navbar/NavbarBottom';
import backgroundImg from '../../public/imgicons/police_blackandwhite.jpg'
import './LegalNotice.css';

const BackgroundContainer = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0;
  height: 100vh;
  width: 100%;
`;

const LegalNotice = () => {
  
    return (
      <div>
        <NavbarBottom />
        <BackgroundContainer>
        <div className="legal-notice-container container">
        <h1><strong>Legal Notice</strong></h1>
        <p>Welcome to RentForces! By using our platform, you agree to comply with 
          the terms and conditions outlined in this Legal Notice. Please read 
          this notice carefully before using our services.</p>
        <ul>
          <li>
            <strong>Intellectual Property</strong>
            <p>All content, including but not limited to text, images, logos, and 
              trademarks, on the RentForces platform is the intellectual property 
              of RentForces and is protected by copyright and other intellectual 
              property laws. You may not use, reproduce, or distribute any content 
              from our platform without obtaining prior written permission from 
              RentForces.
            </p>
          </li>
          <li>
            <strong>User Conduct</strong>
            <p>When using RentForces, you agree not to engage in any activity that may:
              a. Violate any applicable laws or regulations. b. Infringe upon the rights of others,
              including intellectual property rights. c. Interfere with the proper functioning of 
              our platform or disrupt other users' experiences. d. Transmit any harmful or malicious 
              content, including viruses or malware. e. Collect or store personal information from 
              other users without their consent.
            </p>
          </li>
          <li>
            <strong>Disclaimer of Liability</strong>
            <p>RentForces provides its services on an "as is" and "as available" basis. 
              We do not guarantee the accuracy, completeness, or reliability of any information 
              on our platform. We are not liable for any damages or losses resulting from your use 
              of our platform or any content provided therein.
            </p>
          </li>
          <li>
            <strong>Modification of Terms</strong>
            <p>RentForces reserves the right to modify this Legal Notice at any time. We will notify 
              users of significant changes via email or by posting a notice on our platform. Your 
              continued use of RentForces after such modifications constitutes your acceptance of the 
              updated terms.
            </p>
          </li>
          <li>
            <strong>Contact Information</strong>
            <p>If you have any questions or concerns about this Legal Notice or our platform, 
              please contact us at [info@rentforces.com].
            </p>
          </li>
          <strong>Last Updated: [07/22/2023]</strong>
        </ul>
        </div>
        </BackgroundContainer>
      </div>
    );
  }
  
  export default LegalNotice;