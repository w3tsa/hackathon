import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";

// local imports
import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";
import PlaceDetail from "./components/PlaceDetail";

function App() {
  return (
    <>
      <Grid
        templateAreas={`"header header"
        "nav main"
        "nav footer"`}
        gridTemplateRows={"100px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="100vh"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="black" area={"header"}>
          <Header />
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          <List />
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"main"}>
          <Map />
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          <PlaceDetail />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
