import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const PlaceDetail = ({ eventName, address, image }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{eventName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Thank you for checking our site! This is an example of the event
              description.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Take me there</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        backgroundImage={image}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
        cursor={"pointer"}
        onClick={onOpen}
      >
        <Heading fontSize="lg" color={"whiteAlpha.900"}>
          {eventName}
        </Heading>
        <Text mt={4} color={"whiteAlpha.900"}>
          {address}
        </Text>
      </Box>
    </>
  );
};

export default PlaceDetail;
