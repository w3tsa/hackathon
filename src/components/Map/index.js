import { useMemo, useRef, memo, useCallback, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
} from "@react-google-maps/api";

// local imports
import Places from "../SearchTerm";
import { Box, Flex, position, Text } from "@chakra-ui/react";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

function Map({ places }) {
  const [destination, setDestination] = useState();
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const mapRef = useRef();
  const center = useMemo(
    () => ({
      lat: -3.745,
      lng: -38.524,
    }),
    []
  );
  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(null);

  // const onLoad = useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []);
  const onLoad = useCallback((map) => (mapRef.current = map), []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div>
      <Flex justifyContent={"space-around"} m={2}>
        <Text color="black">Search Location</Text>
        <Places
          setDestination={(position) => {
            setDestination(position);
            mapRef.current?.panTo(position);
          }}
          setLocation={setLocation}
        />
      </Flex>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location.lat === 0 ? center : location}
        zoom={location.lat === 0 ? 10 : 14}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={options}
      >
        {places.map((place) => {
          return (
            <Marker
              position={{ lat: place.lat, lng: place.lng }}
              icon="https://img.icons8.com/color/50/google-maps-new.png"
              key={place.id}
            />
          );
        })}

        {console.log("right now", places)}
        {destination && (
          <Marker
            position={destination}
            icon="https://img.icons8.com/color/50/google-maps-new.png"
          />
        )}
        {/* Child components, such as markers, info windows, etc. */}
      </GoogleMap>
    </div>
  ) : (
    <> Loading...</>
  );
}

export default memo(Map);
