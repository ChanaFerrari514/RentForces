import React from 'react';
import NavbarBottom from '../../components/Navbar/NavbarBottom';
import { Link } from 'wouter';

function LegalNotice() {
  
    return (
      <div>
        <NavbarBottom />

        <h1>Legal Notice</h1>
        <p>Welcome to RentForces! By using our platform, you agree to comply with 
          the terms and conditions outlined in this Legal Notice. Please read 
          this notice carefully before using our services.</p>
        <ol>
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
            <stonger>User Conduct</stonger>
            <p>When using RentForces, you agree not to engage in any activity that may:
              a. Violate any applicable laws or regulations. b. Infringe upon the rights of others,
              including intellectual property rights. c. Interfere with the proper functioning of 
              our platform or disrupt other users' experiences. d. Transmit any harmful or malicious 
              content, including viruses or malware. e. Collect or store personal information from 
              other users without their consent.
            </p>
          </li>
          <li>
            <stronger>Disclaimer of Liability</stronger>
            <p>RentForces provides its services on an "as is" and "as available" basis. 
              We do not guarantee the accuracy, completeness, or reliability of any information 
              on our platform. We are not liable for any damages or losses resulting from your use 
              of our platform or any content provided therein.
            </p>
          </li>
          <li>
            <stronger>Links to Third-Party Websites</stronger>
            <p>Our platform may contain links to third-party websites for your convenience. 
              However, we do not endorse or have control over the content of these websites. 
              Visiting third-party websites is at your own risk, and we are not responsible 
              for any damages or issues arising from their use.
            </p>
          </li>
        </ol>
        
      </div>
    );
  }
  
  export default LegalNotice;