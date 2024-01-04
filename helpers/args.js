export const getArgs = (args) => {
  const res = {};
  const args = args.slice(0, 2);
  args.forEach((element, index, arr) => {
    if (element.charAt(0) === "-") {
      if (index === arr.length - 1) {
        res[element.substring(1)] = true;
      } else if (arr[index + 1].charAt(0) !== "-") {
        res[element.substring(1)] = arr[index + 1];
      } else {
        res[element.substring(1)] = true;
      }
    }
  });
  return res;
};
