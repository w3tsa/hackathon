// external packages
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { useNavigate } from 'react-router-dom';
import { Button } from "@chakra-ui/react";


const Places = ({ setDestination, setLocation }) => {
  const {
    value, //ready,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (val) => {
    setValue(val, false);
    clearSuggestions();

    const results = await getGeocode({ address: val });
    const { lat, lng } = getLatLng(results[0]);
    setLocation({ lat, lng });
    setDestination({ lat, lng });
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  }

  return (
    <Combobox onSelect={handleSelect}>
      <div style={{display:"flex"}}>

        <ComboboxInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="css-1f1trk8 css-1kp110w combobox-input"
          placeholder="Search..."
          style={{ color: "black", border: "1px solid black" }}
        />
        <Button
          loadingText="Loading"
          colorScheme="teal"
          variant="outline"
          marginLeft={"20px"}
          onClick={routeChange}
        >
          Go Back
        </Button>
      </div>
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default Places;
