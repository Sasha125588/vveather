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

    const city = result.features[0].properties.city;
    const addressLine2 = result.features[0].properties.address_line2;

    const mockAPIResponse = await fetch(
      "https://65f341c1105614e654a03f14.mockapi.io/api/v1/vveather",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Number,
          addressLine2: addressLine2,
        }),
      }
    );

    const mockData = await mockAPIResponse.json();
    console.log(mockData);

    const vveather = await getData(city);

    resetVVeatherContent(city, vveather);

    console.log(result);
  };

  const error = (err) => {
    console.log(`ERROR(${err.code}): ${err.message}`);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
};
