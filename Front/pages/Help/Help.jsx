import React from 'react';
import styled from 'styled-components';


const BackgroundContainer = styled.div`
  background-image: url('/imgicons/police_blackandwhite.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0;
  height: 100vh;
  width: 100%;
`;

const StyledH1 = styled.h1`
  font-family: Arial, sans-serif;
  margin-bottom: 100px;
  margin-top: 350px;
`;

const StyledListItem = styled.li`
  margin-bottom: 40px;
  font-size: 24px;
`;

const Help = () => {
  return (
    <BackgroundContainer>
      <div>
        <StyledH1>
          <strong>Frequently Asked Questions (FAQs) </strong>
        </StyledH1>
        <ul>
          <StyledListItem>
            <strong>What is "Rent Forces"?</strong>
            <p>
              Rent Forces is a specialized rental platform designed exclusively for members of the armed forces and law enforcement agencies, such as the police. It allows members to find suitable and secure accommodations tailored to their specific needs.
            </p>
          </StyledListItem>
          <StyledListItem>
            <strong>Are the accommodations on "Rent Forces" safe and secure?</strong>
            <p>
              Yes, safety and security are our top priorities. "Rent Forces" takes measures to ensure that all listed accommodations meet safety standards. Additionally, as a community of trusted professionals, renting among fellow members of the armed forces or law enforcement fosters a secure environment.
            </p>
          </StyledListItem>

          <StyledListItem>
            <strong>Can I find short-term rentals on "Rent Forces"?</strong>
            <p>
              Absolutely! Whether you need temporary housing for assignments, special investigations, or training courses, "Rent Forces" offers a wide range of short-term rental options to cater to your specific needs.
            </p>
          </StyledListItem>

          <StyledListItem>
            <strong>What if I encounter issues with a rental or have questions about the platform?</strong>
            <p>
              If you face any challenges or have inquiries, our dedicated customer support team is here to assist you. You can reach out to us through the contact information provided in the Contact Us section.
            </p>
          </StyledListItem>

          <StyledListItem>
            <strong>Is "Rent Forces" available in multiple languages?</strong>
            <p>
              Currently, "Rent Forces" is available in English. However, we are actively working on expanding language options to cater to a broader audience.
            </p>
          </StyledListItem>
        </ul>
      </div>
    </BackgroundContainer>
  );
};

export default Help;
