import React from 'react';
import './Style.css';

const Profile = () => {
  const profileData = {
    firstName: 'John',
    lastName: 'Snow',
    email: 'jon_snow@westeros.com',
  };

  return (
    <div className='profile'>
      <h1>Profile Details</h1>
      <p>
        <strong>First Name:</strong> {profileData.firstName}
      </p><br/>
      <p>
        <strong>Last Name:</strong> {profileData.lastName}
      </p><br/>
      <p>
        <strong>Email:</strong> {profileData.email}
      </p><br/>
    </div>
  );
};

export default Profile;