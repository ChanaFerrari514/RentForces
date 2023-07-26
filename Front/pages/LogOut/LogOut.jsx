import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../../public/imgicons/police_blackandwhite.jpg';
import './LogOut.css';

const BackgroundContainer = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0;
  height: 100vh;
  width: 100%;
`;

const CenteredH1 = styled.h1`
  text-align: center; 
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centrage vertical du texte */
`;

const LogOut = () => {
	if (localStorage.getItem('access_token')) {
		localStorage.removeItem('access_token');
		window.location.reload();
	}
  return (
  	<div>
      <BackgroundContainer>	
      <CenteredH1><strong>Logged Out!</strong></CenteredH1> 
    	</BackgroundContainer>
    </div>
  );
}

export default LogOut;
