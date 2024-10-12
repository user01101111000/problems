// https://leetcode.com/problems/search-insert-position/description/

function searchInsert(nums: number[], target: number): number {
  if (nums.includes(target)) return nums.indexOf(target);

  return [...nums, target].sort((a, b) => a - b).indexOf(target);
}
