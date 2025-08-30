import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid, Container, Heading } from '@chakra-ui/react';
import styled from '@emotion/styled'; 
import ProfileCard from './components/ProfileCard/ProfileCard';
import ProfileCardSkeleton from './components/ProfileCard/ProfileCardSkeleton';
import './App.css';

const AnimatedHeading = styled(Heading)`
  background: linear-gradient(-45deg, #007bff, #28a745, #dc3545);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 10s ease infinite;

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

// Mock user data
const users = [
  {
    name: 'Arun',
    role: 'Frontend Developer',
    image: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvbnRlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D',
    description: 'Passionate about creating beautiful and user-friendly web interfaces with React.',
  },
  {
    name: 'Ruben',
    role: 'Backend Developer',
    image: 'https://plus.unsplash.com/premium_photo-1661371243525-d02768a7feee?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhY2tlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D',
    description: 'Expert in Node.js, databases, and building robust APIs that power our applications.',
  },
  {
    name: 'Maria',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1699075092783-8e58982bc3d8?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFVJJTJGVVglMjBkZXNpZ25lcnxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Focuses on user experience and visual design. Turns complex problems into elegant solutions.',
  },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box className="App">
      <Container maxW="container.lg">
        
        <AnimatedHeading as="h1" textAlign="center" mb={10}>
          Meet Our Team ✨
        </AnimatedHeading>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <ProfileCardSkeleton key={index} />
              ))
            : users.map((user, index) => <ProfileCard key={index} {...user} />)}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default App;