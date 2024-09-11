// https://www.codewars.com/kata/54784a99b5339e1eaf000807

function getFunction(sequence) {
  let formula = "";
  const d = sequence[1] - sequence[0];
  const b = sequence[0];

  if (sequence[0] + d == sequence[1] && sequence[1] + d == sequence[2]) {
    if (d > 0 && b >= 0)
      formula = "f(x) = " + `${d == 1 ? "" : d}x${b == 0 ? "" : " + " + b}`;
    else if (d < 0 && b >= 0)
      formula =
        "f(x) = " + `-${d == 1 ? "" : Math.abs(d)}x${b == 0 ? "" : " + " + b}`;
    else if (d > 0 && b <= 0)
      formula =
        "f(x) = " + `${d == 1 ? "" : d}x${b == 0 ? "" : " - " + Math.abs(b)}`;
    else if (d < 0 && b <= 0)
      formula =
        "f(x) = " +
        `-${d == 1 ? "" : Math.abs(d)}x${b == 0 ? "" : " - " + Math.abs(b)}`;
    else if (d == 0) formula = "f(x) = " + `${b < 0 ? "- " + Math.abs(b) : b}`;
  } else formula = "Non-linear sequence";

  function getFormula(x) {
    if (formula == "Non-linear sequence") return "Non-linear sequence";
    if (formula.length == 1 && formula[0] != "x") return +formula;

    formula = formula.slice(7);

    if (formula[0] == "x")
      formula = formula.replace("x", `1*${x}`).replaceAll(" ", "").split("");
    else if (formula.length == 1 && formula[0] != "x") return +formula;
    else if (formula[0] == "-" && formula[1] == "x")
      formula = formula.replace("x", `1*${x}`).replaceAll(" ", "").split("");
    else if (formula[0] != "x" && formula[1] != "x" && formula[2] == "x")
      formula = formula.replace("x", `*${x}`).replaceAll(" ", "").split("");
    else if (formula[0] != "x" && formula[1] == "x")
      formula = formula.replace("x", `*${x}`).replaceAll(" ", "").split("");
    else if (formula[0] == "-" && formula[2] == "x")
      formula = formula.replace("x", `*${x}`).replaceAll(" ", "").split("");
    else if (formula.length == 1 && formula[0] != "x")
      formula = formula.split("");

    return eval(formula.join(""));
  }

  return formula == "Non-linear sequence" ? "Non-linear sequence" : getFormula;
}
