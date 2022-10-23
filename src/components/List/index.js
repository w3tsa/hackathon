// chakra UI
import {
  Box,
  CircularProgress,
  Container,
  Text,
  VStack,
} from "@chakra-ui/react";
import PlaceDetail from "../PlaceDetail";

// const places = [
//   {
//     id: 267,
//     created_at: "2022-10-16T16:23:00.330665+00:00",
//     event_name: "Dailey & Vincent",
//     lat: null,
//     lng: null,
//     description: "",
//     date: "2022-10-16",
//     address: "Butler University",
//   },
//   {
//     id: 268,
//     created_at: "2022-10-16T16:23:00.430084+00:00",
//     event_name: "Jacksonville Jaguars vs. Indianapolis Colts - Marvel Game",
//     lat: null,
//     lng: null,
//     description: "",
//     date: "2022-10-16",
//     address: "Lucas Oil Stadium",
//   },
//   {
//     id: 269,
//     created_at: "2022-10-16T16:23:00.53039+00:00",
//     event_name: "Carrie Underwood - Denim & Rhinestones Tour",
//     lat: null,
//     lng: null,
//     description: "",
//     date: "2022-10-17",
//     address: "Gainbridge Fieldhouse",
//   },
// ];

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
