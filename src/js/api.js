export const getData = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=17c511e4ba5cc87bade47543973801aa&units=metric`
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
