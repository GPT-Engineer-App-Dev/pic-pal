import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" px={4} py={2} color="white">
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">PhotoShare</Text>
        <Spacer />
        <NavLink to="/" exact>
          <Link px={2} fontSize="lg">Home</Link>
        </NavLink>
        <NavLink to="/profile">
          <Link px={2} fontSize="lg">Profile</Link>
        </NavLink>
        <NavLink to="/upload">
          <Link px={2} fontSize="lg">Upload</Link>
        </NavLink>
      </Flex>
    </Box>
  );
};

export default Navbar;