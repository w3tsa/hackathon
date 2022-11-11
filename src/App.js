import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";

// local imports
import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";
import getPlacesData from "./api";
import { useEffect, useState } from "react";

function App() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlacesData().then((data) => {
      setPlaces(data);
    });
  }, []);

  return (
    <>
      <Grid
        templateAreas={`"header header"
        "nav main"
        "nav footer"`}
        gridTemplateRows={"100px 1fr 0px"}
        gridTemplateColumns={"20% 1fr"}
        h="100vh"
        // gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="black" area={"header"}>
          <Header />
        </GridItem>
        <GridItem pl="2" bg="black" area={"nav"} overflowY={"scroll"}>
          <List places={places} />
        </GridItem>
        <GridItem pl="2" area={"main"}>
          <Map coords={{ lat: 39.9567548, lng: -86.01335 }} places={places} />
        </GridItem>
        {/* <GridItem pl="2" bg="blue.300" area={"footer"}>
          <PlaceDetail />
        </GridItem> */}
      </Grid>
    </>
  );
}

export default App;
