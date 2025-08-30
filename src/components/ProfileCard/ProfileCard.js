import React from 'react';
// This import connects your CSS file to this component
import './ProfileCard.css';

const ProfileCard = ({ name, role, image, description }) => {
  return (
    // These classNames match the selectors in your ProfileCard.css
    <div className="profile-card">
      <img src={image} alt={`${name}'s profile`} className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <h3 className="profile-role">{role}</h3>
      <p className="profile-description">{description}</p>
    </div>
  );
};

export default ProfileCard;