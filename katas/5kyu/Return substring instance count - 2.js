// https://www.codewars.com/kata/52190daefe9c702a460003dd

function searchSubstr(fullText, searchText, allowOverlap = true) {
  if (!searchText || !fullText) return 0;

  const splitted = fullText.split(searchText);

  if (allowOverlap && !splitted.includes("")) return splitted.length - 1;

  if (allowOverlap) return splitted.length;

  return splitted.length - 1;
}
