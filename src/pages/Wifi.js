import React, { useCallback, useEffect, useRef, useState } from "react";
import "../styles/Wifi.css";
import Map, { Layer, Source } from "react-map-gl";
import WifiJson from "../assets/wifi.json";
import PepeIcon from "../assets/pepe.png";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYmVja3l5eXl5IiwiYSI6ImNsZWV2azM0bTBiN2k0NG12cnEybml0am0ifQ.pTk0bhJgKynBeJMf1r8N3A"; // Set your mapbox token here

function Wifi() {
  const mapRef = useRef();
  // function onMapLoad
  const onMapLoad = useCallback(() => {
    mapRef.current.loadImage(PepeIcon, (error, image) => {
      if (error) throw error;

      // Add the loaded image to the style's sprite with the ID 'kitten'.
      mapRef.current.addImage("pepe-icon", image);
      // mapRef.current = map
    });
  }, []);

  return (
    <div className="wifi" style={{ backgroundColor: "#fff200" }}>
      <Map
        ref={(e) => {
          console.log(e);
          mapRef.current = e;
          // e = map
          // .current = mapref default, inside map object there is a current object to save things
        }}
        initialViewState={{
          longitude: -73.9881,
          latitude: 40.7033,
          zoom: 13,
          pitch: 100,
        }}
        style={{
          width: "90%",
          height: "60%",
          borderRadius: "15px",
          border: "2px solid red",
          top: "100px",
          bottom: "0",
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
        onLoad={onMapLoad} // <========== HERE, function `onMapLoad`丟進去，告訴map loading完應該要做什麼事情
      >
        <Source type="geojson" data={WifiJson}>
          <Layer
            type="symbol"
            layout={{
              "icon-image": "pepe-icon",
              "icon-size": 0.2,
              "text-field": ["get", "id"],
            }}
          />
        </Source>
      </Map>

      <div class="col6">
        <h1>Free Wifi</h1>

        <p>find free stuffs in NYC</p>
      </div>
    </div>
  );
}

export default Wifi;
