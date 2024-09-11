// https://www.codewars.com/kata/51f42b1de8f176db5a0002ae

const sortme = (courses) =>
  courses.sort(
    (a, b) =>
      a.split("-")[1] - b.split("-")[1] ||
      a.split("-")[0].localeCompare(b.split("-")[0])
  );
