// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description

function countStudents(students: number[], sandwiches: number[]): number {
  let conditionLimit = sandwiches.length * students.length;

  while (conditionLimit) {
    if (students[0] == sandwiches[0]) {
      sandwiches.shift();
      students.shift();
    } else {
      const el: number = students.shift() as number;
      students.push(el);
    }

    if (students.length == 0 && sandwiches.length == 0) return 0;

    conditionLimit--;
  }

  return students.length;
}
