// https://www.codewars.com/kata/526dbd6c8c0eb53254000110

function alphanumeric(string) {
  if (!string.length) return false;

  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  return string.split("").every((x) => chars.includes(x));
}

// REGEX version

function alphanumeric(string) {
  if (!string.length) return false;

  return string.split("").every((x) => /[a-zA-Z0-9]/.test(x));
}
