"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link as ChakraLink,
  LinkProps,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { NavLink as RouterLink } from "react-router-dom";
import profile_pic from "../../../assets/images/profile_pic.jpg";

const Links = [
  { to: "/", text: "About me" },
  { to: "/contact", text: "Contact" },
  { to: "/my-work", text: "Portfolio" },
];

const NavLink = ({ text, to }) => {
  return (
    <ChakraLink
      as={RouterLink}
      px={2}
      py={1}
      rounded={"md"}
      _activeLink={{ fontWeight: "bold" }}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("green.200", "green.700"),
      }}
      to={to}
    >
      {text}
    </ChakraLink>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("green.100", "green.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.to} to={link.to} text={link.text} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Text
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
            >
              Glad to meet you i'm Darren <span class="wave">👋</span>
            </Text>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"md"} src={profile_pic} />
              </MenuButton>
              <MenuList>
                <MenuItem>Download CV</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.to} to={link.to} text={link.text} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
