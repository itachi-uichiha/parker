// Function to fetch user's current location
type fetchCurrentLocationType = () => google.maps.LatLngLiteral;

export const fetchCurrentLocation = (): Promise<{ lat: number; lng: number }> => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          console.log("Current Location:", currentLocation);
          resolve(currentLocation);
        },
        (error) => {
          console.error("Error getting user location:", error);
          reject(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
};
