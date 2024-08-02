import "./map.css";

import GoogleMapReact from "google-map-react";
import React from "react";

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
        bootstrapURLKeys={{ key: import.meta.env.REACT_APP_GOOGLE_API_KEY ?? "" }}
        defaultCenter={center}
        defaultZoom={18}
        options={getMapOptions}>
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
