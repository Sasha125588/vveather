export const getData = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=17c511e4ba5cc87bade47543973801aa&units=metric`
    );

    const resultApi = await response.json();

    const nameCity = resultApi.name;
    const country = resultApi.sys.country;

    const mockAPIResponse = await fetch(
      "https://65f341c1105614e654a03f14.mockapi.io/api/v1/vveathersearch",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Number,
          country: country,
          city: nameCity,
        }),
      }
    );

    const mockData = await mockAPIResponse.json();
    console.log(mockData);

    return resultApi;
  } catch (error) {
    console.log(error);
  }
};
