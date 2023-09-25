import React from "react";
import {
  Box,
  Flex,
  AspectRatio,
  Image,
  Text,
  Link,
  Button,
  Stack,
} from "@chakra-ui/react";

function CustomCard(props) {
  const { title, description, longLine, link, image } = props;

  return (
    <Box
      p={4}
      display={{ md: "flex" }}
      flexDir="column"
      maxWidth="40rem"
      borderWidth={1}
      margin={2}
    >
      <img
        width="100%"
        margin="auto"
        src={image}
        alt="Woman paying for a purchase"
        style={{ borderRadius: "10%" }}
      />
      <Stack
        align={{ base: "center", md: "stretch" }}
        textAlign={{ base: "center", md: "left" }}
        mt={{ base: 4, md: 5 }}
        ml={{ md: 6 }}
      >
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="lg"
          letterSpacing="wide"
          color="teal.600"
        >
          {title}
        </Text>
        <Text
          my={1}
          display="block"
          fontSize="md"
          lineHeight="normal"
          fontWeight="semibold"
          href="#"
        >
          {description}
        </Text>
        <Text my={2} color="gray.500">
          {longLine}
        </Text>
        <Button maxWidth="100px" my={2}>
          <a target="_blank" href={link}>
            Click me!
          </a>
        </Button>
      </Stack>
    </Box>
  );
}

export default CustomCard;
