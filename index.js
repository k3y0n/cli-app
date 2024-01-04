import { getArgs } from "./helpers/args.js";
import { getIcon, getWeather } from "./services/api.service.js";
import {
  printHelp,
  printError,
  printSuccess,
  printWeather,
} from "./services/log.service.js";
import {
  TOKEN_DICTIONARY,
  getKeyValue,
  saveKeyValue,
} from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token was not provided");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Token was saved successfully");
  } catch (e) {
    printError(e.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError("City not provided");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess("City was saved successfully");
  } catch (e) {
    printError(e.message);
  }
};

const getForecast = async () => {
  try {
    const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
    const weather = await getWeather(city);
    printWeather(weather, getIcon(weather.weather[0].icon));
  } catch (e) {
    if (e?.response?.status == 404) {
      printError("Incorrect city name");
    } else if (e?.response?.status == 401) {
      printError("Token provided not valid");
    } else {
      printError("test", e.message);
    }
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    return printHelp();
  }
  if (args.s) {
    return saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  return getForecast();
};

initCLI();
