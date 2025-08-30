import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Box, VStack } from '@chakra-ui/react'; // Reuse Chakra's Box

const ProfileCardSkeleton = () => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p={6}
      bg="white"
    >
      <VStack spacing={4} align="center">
        <Skeleton circle height={150} width={150} />
        <Skeleton height={30} width="80%" />
        <Skeleton height={20} width="60%" />
        <Skeleton count={2} height={15} width="90%" />
      </VStack>
    </Box>
  );
};

export default ProfileCardSkeleton;