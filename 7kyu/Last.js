// https://www.codewars.com/kata/541629460b198da04e000bb9

const last = (...args) => {
  if (args.length === 1) {
    if (Array.isArray(args[0])) return args[0].at(-1);
    else {
      if (typeof args[0] == "string") return args[0].split("").at(-1);
      else return args[0];
    }
  }

  return args.at(-1);
};
