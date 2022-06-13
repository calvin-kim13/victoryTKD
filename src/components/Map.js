import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "../App.css";

const Map = () => {
  return (
    <MapContainer
      center={[33.98053, -118.05089]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org">OpenMapTiles</a>, &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[33.98053, -118.05089]}>
        <Popup>Victory Taekwondo (V1)</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
