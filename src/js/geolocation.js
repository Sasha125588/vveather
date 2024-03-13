import { getData } from "./api.js";
import { resetVVeatherContent } from "./helper.js";

export const handleVVeatherByGeolocation = () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const success = async (pos) => {
    const crd = pos.coords;

    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${crd.latitude}&lon=${crd.longitude}&apiKey=f702d64ffc27420093ddcf0493809bd6`
    );

    const result = await response.json();

    const vveather = await getData(result.features[0].properties.city);

    resetVVeatherContent(result.features[0].properties.city, vveather);
  };

  const error = (err) => {
    console.log(`ERROR(${err.code}): ${err.message}`);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
};
