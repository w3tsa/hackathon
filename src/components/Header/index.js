// chakra ui
import {
  Box,
  Container,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
// react map lib
// import { Autocomplete } from "@react-google-maps/api";
import { useRef, useState } from "react";

// local imports
import Places from "../SearchTerm";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [destination, setDestination] = useState();
  const mapRef = useRef();
  return (
    <Heading as={"h3"} size={"lg"} color={"white"} textAlign={"center"} mt={2}>
      Events Recommender
    </Heading>
  );
};

export default Header;

/* 
<Autocomplete>
<InputGroup
maxW={"400px"}
p={2}
borderBottom={"1px solid gray"}
// borderRadius={"5px"}
variant="unstyled"
>
<Input
  placeholder={"Search places"}
  aria-label="Search articles"
  focusBorderColor={"none"}
  _hover={{}}
  borderRight={"none"}
  color={"white"}
  // onChange={(e) => setFilter(e.target.value)}
/>
<InputRightAddon
  // pointerEvents="none"
  bgColor={"transparent"}
  borderColor={"inherit"}
  cursor={"pointer"}
>
  <SearchIcon color={"white"} />
</InputRightAddon>
</InputGroup>
</Autocomplete>
*/
