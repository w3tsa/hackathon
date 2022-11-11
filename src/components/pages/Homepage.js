import { Box, Container, Text } from "@chakra-ui/react";
import LargeButton1 from "../elements/LargeButton1";

function Homepage() {
  return (
    <Container maxW={"2xl"} mt={10}>
      <Box m={5}>
        <Text fontSize="md">WELCOME TO</Text>
        <Text fontSize="3xl">Google Maps Hackathon</Text>
      </Box>
      <LargeButton1 text="Continue" path="/instructions" />
    </Container>
  );
}

export default Homepage;
