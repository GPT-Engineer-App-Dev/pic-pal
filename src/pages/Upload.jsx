import { Box, Button, Input, VStack, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const Upload = () => {
  const [photo, setPhoto] = useState(null);
  const [caption, setCaption] = useState("");

  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleUpload = () => {
    console.log("Photo:", photo);
    console.log("Caption:", caption);
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Input type="file" accept="image/*" onChange={handlePhotoChange} />
        <Textarea placeholder="Write a caption..." value={caption} onChange={handleCaptionChange} />
        <Button colorScheme="blue" onClick={handleUpload}>Upload</Button>
      </VStack>
    </Box>
  );
};

export default Upload;