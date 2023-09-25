"use client";

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import profile_pic from "../../assets/images/profile_pic.jpg";

export default function AboutMe() {
  return (
    <Container maxW="full" maxH="full" mt={0} centerContent overflow="hidden">
      <Flex flexDirection="column">
        <Box
          bg={useColorModeValue("gray.100", "gray.200")}
          color="black"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
          width={{ sm: 100, md: 300, lg: 1000 }}
        >
          <Box>
            <Flex
              direction="column"
              justifyContent={"center"}
              alignItems="center"
            >
              <WrapItem alignItems={"center"} justifyContent={"center"}>
                <img
                  style={{ height: "200px", borderRadius: "10px" }}
                  src={profile_pic}
                  alt="Darren Johnson"
                />
                <Box>
                  <Heading ml={{ sm: 3, md: 3, lg: 5 }}>About Me</Heading>
                  <Text
                    mt={{ sm: 3, md: 3, lg: 2 }}
                    ml={{ sm: 3, md: 3, lg: 5 }}
                    color="black"
                  >
                    Hello, I'm Darren Johnson, a passionate and experienced web
                    developer with a creative flair for crafting exceptional
                    digital experiences. I thrive on turning innovative ideas
                    into functional, user-friendly websites that not only meet
                    but exceed client expectations. With a strong foundation in
                    front-end and back-end technologies, I possess a keen eye
                    for design and a commitment to clean, efficient code. My
                    journey in web development has been marked by a dedication
                    to staying current with industry trends and a relentless
                    pursuit of excellence in every project I undertake. Whether
                    it's building responsive and visually captivating websites
                    or optimizing performance and security, I take pride in
                    delivering solutions that make a lasting impact. Welcome to
                    my portfolio, where you can explore the digital landscapes
                    I've helped shape and discover how I can bring your web
                    development dreams to life.
                  </Text>
                </Box>
              </WrapItem>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
