// chakra ui
import { Heading } from "@chakra-ui/react";
// react map lib
// import { Autocomplete } from "@react-google-maps/api";
const Header = () => {
  return (
    <Heading as={"h3"} size={"lg"} color={"white"} textAlign={"center"} mt={2}>
      Events Recommender
    </Heading>
  );
};

export default Header;
