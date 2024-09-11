// https://www.codewars.com/kata/5899a4b1a6648906fe000113

const findRoutes = (routes) => {
  const uniqueTraffic = [];

  for (const elem of routes)
    !routes.find((curr) => curr[1] === elem[0]) &&
      uniqueTraffic.push(elem[0], elem[1]);

  for (const _ of routes) {
    for (const elem of routes)
      elem[0] == uniqueTraffic[uniqueTraffic.length - 1] &&
        uniqueTraffic.push(elem[1]);
  }

  return uniqueTraffic.join(", ");
};
