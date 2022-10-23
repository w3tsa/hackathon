// react map lib
import {
  Box,
  Container,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Autocomplete } from "@react-google-maps/api";
import { useState } from "react";

// chakra ui

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      m={"30px 10px 0 10px"}
    >
      <Heading as={"h3"} size={"lg"} color={"white"}>
        Events Recommender
      </Heading>
      {/* <Autocomplete> */}
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
      {/* </Autocomplete> */}
    </Box>
  );
};

export default Header;
