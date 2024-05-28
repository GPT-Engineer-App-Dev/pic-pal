import { Box, Container, Flex, Heading, IconButton, Image, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaUser, FaUpload } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [selectedTab, setSelectedTab] = useState("home");
  const [photos, setPhotos] = useState([]);
  const [profilePhotos, setProfilePhotos] = useState([]);
  const [newPhoto, setNewPhoto] = useState(null);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const photo = { id: Date.now(), src: reader.result };
        setPhotos([photo, ...photos]);
        setProfilePhotos([photo, ...profilePhotos]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container maxW="container.lg" p={4}>
      <Flex justify="space-between" align="center" mb={4}>
        <Heading size="lg">PhotoShare</Heading>
        <Flex>
          <IconButton
            aria-label="Home"
            icon={<FaHome />}
            onClick={() => handleTabChange("home")}
            mr={2}
          />
          <IconButton
            aria-label="Profile"
            icon={<FaUser />}
            onClick={() => handleTabChange("profile")}
            mr={2}
          />
          <IconButton
            aria-label="Upload"
            icon={<FaUpload />}
            onClick={() => handleTabChange("upload")}
          />
        </Flex>
      </Flex>

      {selectedTab === "home" && (
        <VStack spacing={4}>
          {photos.length === 0 ? (
            <Text>No photos to display</Text>
          ) : (
            photos.map((photo) => (
              <Box key={photo.id} boxShadow="md" p={2} rounded="md">
                <Image src={photo.src} alt="User uploaded photo" />
              </Box>
            ))
          )}
        </VStack>
      )}

      {selectedTab === "profile" && (
        <VStack spacing={4}>
          <Heading size="md">My Profile</Heading>
          {profilePhotos.length === 0 ? (
            <Text>No photos uploaded</Text>
          ) : (
            profilePhotos.map((photo) => (
              <Box key={photo.id} boxShadow="md" p={2} rounded="md">
                <Image src={photo.src} alt="User uploaded photo" />
              </Box>
            ))
          )}
        </VStack>
      )}

      {selectedTab === "upload" && (
        <VStack spacing={4}>
          <Heading size="md">Upload Photo</Heading>
          <Input type="file" accept="image/*" onChange={handlePhotoUpload} />
        </VStack>
      )}
    </Container>
  );
};

export default Index;