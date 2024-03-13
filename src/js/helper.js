import { createHeader } from "./appHeader.js";
import { createContent } from "./appContent.js";
export const directionOfWind = (degree) => {
  if (degree > 337.5) {
    return "Northern";
  }
  if (degree > 292.5) {
    return "Northwest";
  }
  if (degree > 247.5) {
    return "West";
  }
  if (degree > 202.5) {
    return "Southwest";
  }
  if (degree > 157.5) {
    return "Southern";
  }
  if (degree > 122.5) {
    return "Southeast";
  }
  if (degree > 67.5) {
    return "Eastern";
  }
  if (degree > 22.5) {
    return "Northeast";
  }
  return "Northern";
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const cToF = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

export const fToC = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

export const resetVVeatherContent = (city, vveather) => {
  localStorage.setItem("city", JSON.stringify(city));
  document.body.innerHTML = "";
  const header = createHeader(city);
  const content = createContent(vveather);
  document.body.append(header, content);
};
