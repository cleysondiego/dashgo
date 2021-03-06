import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Cleyson Diego</Text>
          <Text color="gray.300" fontSize="small">
            cleyson7@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Cleyson Diego" src="https://github.com/cleysondiego.png"/>
    </Flex>
  );
}