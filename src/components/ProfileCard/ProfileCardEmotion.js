import React from 'react';
import styled from '@emotion/styled';

// Create a styled component for the main card container
const CardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin: 15px;
  width: 300px;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

// Create a styled component for the circular profile image
const ProfileImage = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  border: 4px solid #f0f0f0;
`;

// Styled component for the user's name
const NameHeading = styled.h2`
  font-size: 1.6em;
  margin: 10px 0 5px;
  color: #333;
`;

// Styled component for the user's role
const RoleText = styled.h3`
  font-size: 1.1em;
  color: #007bff;
  font-weight: 500;
  margin-bottom: 12px;
`;

// Styled component for the description
const DescriptionText = styled.p`
  font-size: 0.95em;
  color: #666;
  line-height: 1.5;
`;


// --- The Main Profile Card Component ---
// It accepts props and uses the styled components we defined above.
const ProfileCardEmotion = ({ name, role, image, description }) => {
  return (
    <CardContainer>
      <ProfileImage src={image} alt={`${name}'s profile`} />
      <NameHeading>{name}</NameHeading>
      <RoleText>{role}</RoleText>
      <DescriptionText>{description}</DescriptionText>
    </CardContainer>
  );
};

export default ProfileCardEmotion;