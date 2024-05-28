import { Box, Container, Flex, Heading, Image, VStack, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const photos = [
  { id: 1, src: "https://via.placeholder.com/300", alt: "Photo 1" },
  { id: 2, src: "https://via.placeholder.com/300", alt: "Photo 2" },
  { id: 3, src: "https://via.placeholder.com/300", alt: "Photo 3" },
];

const Index = () => {
  return (
    <Container maxW="container.lg" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">PhotoShare</Heading>
        <Link as={RouterLink} to="/" color="white" fontWeight="bold">
          Home
        </Link>
      </Flex>
      <Box p={4}>
        <VStack spacing={4}>
          {photos.map((photo) => (
            <Box key={photo.id} borderWidth="1px" borderRadius="lg" overflow="hidden" w="100%">
              <Image src={photo.src} alt={photo.alt} w="100%" />
              <Box p={4}>
                <Text>Photo description or caption goes here.</Text>
              </Box>
            </Box>
          ))}
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;