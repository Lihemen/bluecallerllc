import React from "react";
import GoogleMapReact from "google-map-react";

import "./map.css";

const Marker = (props) => {
  const { color, name } = props;
  return (
    <>
      <div
        className="pin bounce"
        style={{ backgroundColor: color, cursor: "pointer" }}
        title={name}
      />
      <div className="pulse" />
    </>
  );
};

export const LocationMap = () => {
  const center = { lat: 9.070687214723613, lng: 7.434872271164185 };
  const getMapOptions = (maps) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "on" }],
        },
      ],
    };
  };
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD0jXG6tZX5eypxrx-NqpzHsyFAWKT1Y2w" }}
        defaultCenter={center}
        defaultZoom={18}
        options={getMapOptions}
      >
        <Marker
          lat={center.lat}
          lng={center.lng}
          name="My Marker"
          color="red"
        />
      </GoogleMapReact>
    </div>
  );
};

