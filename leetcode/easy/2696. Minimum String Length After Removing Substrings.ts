// https://leetcode.com/problems/minimum-string-length-after-removing-substrings/description

function minLength(s: string): number {
  s.split("").forEach((_: string) => {
    if (s.includes("AB") || s.includes("CD")) {
      s = s.replace("AB", "");
      s = s.replace("CD", "");
    }
  });

  return s.length;
}
