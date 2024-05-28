import { Box, Container, VStack, HStack, Text, Button, Image, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FaHome, FaUpload } from "react-icons/fa";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [photos, setPhotos] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const toast = useToast();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotos([...photos, reader.result]);
        setSelectedFile(null);
        toast({
          title: "Photo uploaded.",
          description: "Your photo has been uploaded successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      };
      reader.readAsDataURL(selectedFile);
    } else {
      toast({
        title: "No file selected.",
        description: "Please select a file to upload.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="container.lg" p={4}>
      <HStack spacing={8} justifyContent="space-between" mb={8}>
        <Text fontSize="2xl" fontWeight="bold">PhotoShare</Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaHome />} onClick={() => setActiveTab("home")}>Home</Button>
          <Button leftIcon={<FaUpload />} onClick={() => setActiveTab("upload")}>Upload</Button>
        </HStack>
      </HStack>

      {activeTab === "home" && (
        <VStack spacing={4}>
          {photos.length === 0 ? (
            <Text>No photos to display. Upload some photos to get started!</Text>
          ) : (
            photos.map((photo, index) => (
              <Box key={index} boxShadow="md" p={4} rounded="md" bg="white">
                <Image src={photo} alt={`Uploaded photo ${index + 1}`} />
              </Box>
            ))
          )}
        </VStack>
      )}

      {activeTab === "upload" && (
        <VStack spacing={4}>
          <Input type="file" onChange={handleFileChange} />
          <Button onClick={handleUpload}>Upload Photo</Button>
        </VStack>
      )}
    </Container>
  );
};

export default Index;