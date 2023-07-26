
import React from 'react';
import styled from 'styled-components';
import './UserDashboard.css';
import backgroundImg from '../../public/imgicons/police_blackandwhite.jpg';
import policeBadgeIcon from '../../public/imgicons/A-09-police-badge.png';


const BackgroundContainer = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0;
  height: 100vh;
  width: 100%;
`;

const PoliceBadgeIcon = styled.img`
  margin-top: 30px; 
`;

const UserDashboard = () => {
  return (
    <div>
      <BackgroundContainer>
        <div className="userdashboard-container">
          <PoliceBadgeIcon src={policeBadgeIcon} alt="Police Badge" className="police-badge-icon" />
          <h2 className="userdashboard-title">Welcome aboard to Rent Forces!</h2>
          <p className="userdashboard-text">
            On your User Dashboard, you have full control over your profile and reservations.
            Feel free to make any necessary changes to your profile and manage your reservations with ease.
            If you have any questions or need assistance, don't hesitate to&nbsp;
            <span className="userdashboard-link">reach out</span>.
          </p>
          <p className="userdashboard-text larger-text"><strong>Enjoy your experience with Rent Forces!</strong></p>
        </div>
      </BackgroundContainer>
    </div>
  );
};


export default UserDashboard;

