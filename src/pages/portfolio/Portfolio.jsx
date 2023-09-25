"use client";

import { Container, Flex, Box, useColorModeValue } from "@chakra-ui/react";

import ProjectsContainer from "./ProjectsContainer";

export default function Portfolio() {
  return (
    <Container maxW="full" maxH="full" mt={0} centerContent overflow="hidden">
      <Flex
        width={{ sm: "100%", md: "100%", lg: "100%" }}
        flexDirection="column"
      >
        <Box
          bg={useColorModeValue("gray.200", "gray.400")}
          color="black"
          borderRadius="lg"
          m={{ sm: 4, md: 8, lg: 8 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Flex gap={5} direction="row" flexWrap="nowrap" alignItems="center">
              <ProjectsContainer />
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
