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

function SubmitEvent() {
  const handleSubmit = (e) => {
    e.preventDefault();
    let url = process.env.REACT_APP_DATABASE_URL + "Events";

    let payLoad = {
      event_name: e.target.eventName.value,
      address: e.target.eventAddress.value,
      description: e.target.eventDescription.value,
      date: e.target.eventDate.value,
    };

    let headers = {
      headers: {
        apikey: process.env.REACT_APP_DATABASE_API_KEY,
        Authorization: "Bearer" + process.env.REACT_APP_DATABASE_API_KEY,
      },
    };

    axios
      .post(url, payLoad, headers)
      .then(() => {
        console.log("Submission successfull.");
      })
      .catch((error) => {
        console.error("Submission error occurred: ", error.response);
        console.error(error);
      });

    /* NEED ERROR HANDLING IF PAYLOAD ERRORS OUT. */
  };

  return (
    <Container mt={5}>
      <Stack>
        <div>
          <Text fontSize="3xl">Submit your event!</Text>
        </div>
        <form onSubmit={handleSubmit}>
          <FormControl>
            {/* Event Name */}
            <div>
              <FormLabel mt="1rem">Event Name:</FormLabel>
              <Input name="eventName" className="eventName" />
            </div>

            {/* Address */}
            <div>
              <FormLabel mt="1rem">Address:</FormLabel>
              <Input name="eventAddress" className="eventAddress" />
            </div>

            {/* Description */}
            <div>
              <FormLabel mt="1rem">Description:</FormLabel>
              <Input name="eventDescription" className="eventDescription" />
            </div>

            {/* Date */}
            <div>
              <FormLabel mt="1rem">Date:</FormLabel>
              <Input name="eventDate" className="eventDate" />
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
      </Stack>
    </Container>
  );
}

export default SubmitEvent;
