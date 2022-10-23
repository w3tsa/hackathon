import { Box, Heading, Text } from "@chakra-ui/react";

const PlaceDetail = ({ eventName, address }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading fontSize="lg" color={"whiteAlpha.900"}>
        {eventName}
      </Heading>
      <Text mt={4} color={"whiteAlpha.900"}>
        {address}
      </Text>
    </Box>
  );
};

export default PlaceDetail;
