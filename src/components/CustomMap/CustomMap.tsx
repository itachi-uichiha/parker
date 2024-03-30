"use client";
import React, { useEffect, useState } from "react";
import { Map } from "@vis.gl/react-google-maps";
import { fetchCurrentLocation } from "@/utils/helpers";
import { SpinnerIcon } from "@/assets/icons";

const CustomMap = () => {
  const [currentLocation, setCurrentLocation] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    // function to fetch current location
    fetchCurrentLocation().then((res) => {
      console.log("🚀 ~ fetchCurrentLocation ~ res:", res);
      setCurrentLocation(res);
    });
  }, []);

  console.log("🚀 ~ CustomMap ~ currentLocation:", currentLocation);
  return (
    <Map
      className="w-full h-full z-50"
      center={currentLocation}
      zoom={12}
    ></Map>
  );
};

export default CustomMap;
