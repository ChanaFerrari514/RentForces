
import React from 'react';
import './UserDashboard.css';

const UserDashboard = () => {
  const user = {
    username: 'JohnDoe', // Replace with the actual username
    email: 'john.doe@example.com', // Replace with the actual email
    // Autres informations spécifiques à l'utilisateur...
  };

  return (
    <div className="userdashboard-container">
      <h2 className="userdashboard-title">Welcome aboard to Rent Forces, {user.username}!</h2>
      <p className="userdashboard-text">
        On your User Dashboard, you have full control over your profile and reservations.
        Feel free to make any necessary changes to your profile and manage your reservations with ease.
        If you have any questions or need assistance, don't hesitate to&nbsp;
        <span className="userdashboard-link">reach out</span>.
      </p>
      <p className="userdashboard-text">Enjoy your experience with Rent Forces!</p>
      <p className="userdashboard-email">Email: {user.email}</p>
    </div>
  );
};

export default UserDashboard;

