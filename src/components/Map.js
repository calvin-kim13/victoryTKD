import styled from "@emotion/styled";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";

import "../App.css";

const Map = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>Victory Taekwondo (V1)</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
