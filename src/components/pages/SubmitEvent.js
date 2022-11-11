import { React } from "react";
import { FormControl, Text, FormLabel, Input, Button, Stack } from '@chakra-ui/react';
import axios from 'axios';
import { getGeocode, getLatLng } from 'use-places-autocomplete';
import {
  useJsApiLoader
} from "@react-google-maps/api";
import PlacesAutocomplete from "../elements/SearchAutocomplete";

function SubmitEvent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries: ["places"],
  });
  

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = process.env.REACT_APP_DATABASE_URL + 'Events';

    console.log(e.target.searchAddress);

    getGeocode({address: e.target.searchAddress.value}).then((res) => {

      let { lat, lng } = getLatLng(res[0]);
      console.log(lat, lng);

      let payLoad = {
        event_name: e.target.eventName.value,
        address: e.target.searchAddress.value,
        description: e.target.eventDescription.value,
        date: e.target.eventDate.value,
        lat: lat,
        lng: lng
      };
  
      let headers = {
        headers: {
          apikey: process.env.REACT_APP_DATABASE_API_KEY,
          Authorization: 'Bearer' + process.env.REACT_APP_DATABASE_API_KEY
        }
      }
  
      axios.post(url, payLoad, headers)
        .then(() => {
          console.log('Submission successfull.');
        })
        .catch((error) => {
          console.error('Submission error occurred: ', error.response);
          console.error(error);
        })

    })
    .catch((err) => {
      console.log("ERROR: ", err);
    })

    /* NEED ERROR HANDLING IF PAYLOAD ERRORS OUT. */
  }

  return isLoaded ? (
    <div className='submitevent public'>
      <Stack>
        <div>
          <Text fontSize='3xl'>
            Submit your event!
          </Text>
        </div>
        <form onSubmit={handleSubmit}>
          <FormControl>
            {/* Event Name */}
            <div>
              <FormLabel mt='1rem'>Event Name (required):</FormLabel>
              <Input name='eventName' className='eventName' placeholder='Type name'/>
            </div>

            {/* Address  */}
            <div>
              <Text mt='1rem' className='css-4ykw5o'>Address (required):</Text>
              <PlacesAutocomplete name='eventAddress' className='eventAddress' />
            </div>

            {/* Description */}
            <div>
              <FormLabel mt='1rem'>Description:</FormLabel>
              <Input name='eventDescription' className='eventDescription' placeholder='Type description'/>
            </div>

            {/* Date */}
            <div>
              <FormLabel mt='1rem'>Date (required):</FormLabel>
              <Input name='eventDate' className='eventDate' placeholder='Type date'/>
            </div>

            <Button
              mt='1rem'
              loadingText='Submitting'
              colorScheme='teal'
              variant='outline'
              type='submit'
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </Stack>

    </div>
  ) : (
    <>Loading...</>
  );
}

export default SubmitEvent;