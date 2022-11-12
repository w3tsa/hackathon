import { React } from "react";
import {
  FormControl,
  Text,
  FormLabel,
  Input,
  Button,
  Stack,
  Container,
} from "@chakra-ui/react";
import axios from "axios";
import { getGeocode, getLatLng } from "use-places-autocomplete";
import { useJsApiLoader } from "@react-google-maps/api";
import PlacesAutocomplete from "../elements/SearchAutocomplete";

function SubmitEvent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
    libraries: ["places"],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = process.env.REACT_APP_SUPABASE_URL;

    console.log(e.target.searchAddress);

    getGeocode({ address: e.target.searchAddress.value })
      .then((res) => {
        let { lat, lng } = getLatLng(res[0]);
        console.log(lat, lng);

        let payLoad = {
          event_name: e.target.eventName.value,
          address: e.target.searchAddress.value,
          description: e.target.eventDescription.value,
          imgSrc: e.target.imageSource.value,
          date: e.target.eventDate.value,
          lat: lat,
          lng: lng,
        };

        let headers = {
          headers: {
            apikey: process.env.REACT_APP_SUPABASE_KEY,
            Authorization: "Bearer" + process.env.REACT_APP_SUPABASE_KEY,
          },
        };

        axios
          .post(url, payLoad, headers)
          .then(() => {
            console.log("Submission successfull.");
            e.target.reset();
          })
          .catch((error) => {
            console.error("Submission error occurred: ", error.response);
            console.error(error);
          });
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });

    /* NEED ERROR HANDLING IF PAYLOAD ERRORS OUT. */
  };

  return isLoaded ? (
    <div className="submitevent public">
      <Container maxW={"2xl"}>
        <div>
          <Text fontSize="3xl">Submit your event!</Text>
        </div>
        <form onSubmit={handleSubmit}>
          <FormControl>
            {/* Event Name */}
            <div>
              <FormLabel mt="1rem">Event Name (required):</FormLabel>
              <Input
                name="eventName"
                className="eventName"
                placeholder="Type name"
              />
            </div>

            {/* Address  */}
            <div>
              <Text mt="1rem" className="css-1sxu0pl">
                Address (required):
              </Text>
              <PlacesAutocomplete
                name="eventAddress"
                className="eventAddress"
              />
            </div>

            {/* Description */}
            <div>
              <FormLabel mt="1rem">Description:</FormLabel>
              <Input
                name="eventDescription"
                className="eventDescription"
                placeholder="Type description"
              />
            </div>

            {/* image source */}
            <div>
              <FormLabel mt="1rem">Image Source:</FormLabel>
              <Input
                name="imageSource"
                className="eventDescription"
                placeholder="Type Image url"
              />
            </div>
            {/* Date */}
            <div>
              <FormLabel mt="1rem">Date (required):</FormLabel>
              <Input
                name="eventDate"
                className="eventDate"
                placeholder="Type date"
                type={"date"}
              />
            </div>

            <Button
              mt="1rem"
              loadingText="Submitting"
              colorScheme="teal"
              variant="outline"
              type="submit"
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </Container>
    </div>
  ) : (
    <>Loading...</>
  );
}

export default SubmitEvent;
