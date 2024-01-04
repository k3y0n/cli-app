import chalk from "chalk";

export const printError = (error) => {
  console.log(chalk.bgRed(`Error: ${error.message}`));
};
export const printSuccess = (success) => {
  console.log(chalk.bgGreen(`Success: ${success}`));
};
export const printWeather = (res, icon) => {
  console.log(
    `${chalk.bgYellow(" WEATHER ")} Weather in city ${res.name}
		${icon}  ${res.weather[0].description}
		Temperature: ${res.main.temp} (feels like ${res.main.feels_like})
		Humidity: ${res.main.humidity}%
		Wind speed: ${res.wind.speed}
		`
  );
};
export const printHelp = () => {
  console.log(
    chalk.bgBlue(
      `Help information:
    No arguments - print weather information
    -s [CITY_NAME] - set the name of the city
    -h - print help information
    -t [API_KEY] - set the API key weather map`
    )
  );
};
