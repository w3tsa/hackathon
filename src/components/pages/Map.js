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
import Places from "../Places";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

function Map() {
  const [destination, setDestination] = useState();
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
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
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
    <div className="container">
      <aside>
        <h1>Controls</h1>
        <Places
          setDestination={(position) => {
            setDestination(position);
            mapRef.current?.panTo(position);
          }}
        />
      </aside>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={options}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </div>
  ) : (
    <> Loading...</>
  );
}

export default memo(Map);
