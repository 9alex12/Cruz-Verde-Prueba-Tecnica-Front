import React from "react";
import GoogleMaps from "simple-react-google-maps";
import { OFFICES } from "../OfficesData";

const officeCoordinates = [];

const Map = () => {
  OFFICES.map((office) => {
    const coordinates = { lat: office.lat, lng: office.lng };
    officeCoordinates.push(coordinates);
  });
  return (
    <GoogleMaps
      apiKey={"AIzaSyCbskK2x0m2QirC7O6RlYfip2NqUcypIZs"}
      style={{ width: "100%" }}
      options={{ gestureHandling: "none" }}
      zoom={12}
      center={{ lat: 4.62971, lng: -74.08175 }}
      markers={officeCoordinates}
    />
  );
};

export default Map;
