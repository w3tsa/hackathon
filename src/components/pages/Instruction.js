import LargeButton1 from "../elements/LargeButton1";
import {
  Text,
  OrderedList,
  ListItem,
  Container,
  Box,
  VStack,
} from "@chakra-ui/react";

function Instruction() {
  return (
    <Container mt={10}>
      <div>
        <Text fontSize="3xl">INSTRUCTIONS</Text>
      </div>

      <Box mt={10}>
        <OrderedList className="instructions-list-ctn">
          <ListItem className="instructions-item">
            Whether you're a visitor or frequenter around the area, use this app
            to find nearby events by typing in your location.
          </ListItem>
          <ListItem>
            If you're a host, continue to the submission page to add your event
            and spread the word!
          </ListItem>
        </OrderedList>
      </Box>

      <VStack>
        <LargeButton1 text="Add an event!" path="/submitevent" />
        <LargeButton1 text="Go to map" path="/map" />
      </VStack>
    </Container>
  );
}

export default Instruction;
