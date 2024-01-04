import { getArgs } from "./helpers/args.js";
import { printHelp, printError, printSuccess } from "./services/log.service.js";
const initCLI = () => {
//   const args = getArgs(process.args);
  printHelp();
};

initCLI();
