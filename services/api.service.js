import https from "https";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";
import { printError } from "./log.service.js";

export const getWeather = async (city) => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token);
  if (!token) {
    return printError("Invalid token, set token by command -t");
  }
  const url = new URL("https://api.openweathermap.org/data/2.5/weather?");
  url.searchParams.append("q", city);
  url.searchParams.append("appid", token);
  url.searchParams.append("lang", "ru");
  url.searchParams.append("units", "metric");
  https.get(url, (res) => {
    let result = "";
    res.on("data", (data) => {
      res += data;
    });
    res.on("end", () => {
      console.log(result);
    });
  });
};
