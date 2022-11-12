// chakra UI
import {
  Box,
  CircularProgress,
  Container,
  Text,
  VStack,
} from "@chakra-ui/react";
import PlaceDetail from "../PlaceDetail";

const List = ({ places }) => {
  return (
    <Container>
      <Text color={"whiteAlpha.900"} textAlign={"center"} fontSize={"1.5em"}>
        Events Near you
      </Text>
      <VStack spacing={2} mt={5}>
        {places.length > 0 ? (
          places?.map((place) => {
            return (
              <PlaceDetail
                eventName={place.event_name}
                address={place.address}
                key={place.id}
                image={place.imgSrc}
              />
            );
          })
        ) : (
          <Box display="grid" placeItems={"center"} h={"100vh"}>
            <CircularProgress
              isIndeterminate
              color="green.300"
              thickness="4px"
              size="100px"
            />
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default List;
