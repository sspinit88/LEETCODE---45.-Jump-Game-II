/*
45. Jump Game II

You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

    0 <= j <= nums[i] and
    i + j < n

Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

 
Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: nums = [2,3,0,1,4]
Output: 2

Constraints:

    1 <= nums.length <= 104
    0 <= nums[i] <= 1000
    It's guaranteed that you can reach nums[n - 1].
*/

/**
 * This function calculates the minimum number of jumps to reach the last index.
 * Эта функция вычисляет минимальное количество прыжков для достижения последнего индекса.
 *
 * @param {number[]} nums - The array of maximum jump lengths. Массив максимальных длин прыжков.
 * @return {number} The minimum number of jumps. Минимальное количество прыжков.
 */
function jump(nums) {
  // Initialize the maximum reach, steps, and jump count.
  // Инициализируем максимальный диапазон, шаги и количество прыжков.
  let maxReach = nums[0];
  let steps = nums[0];
  let jumps = 1;

  for (let i = 1; i < nums.length; i++) {
    // If we have reached the last index, return the jump count.
    // Если мы достигли последнего индекса, возвращаем количество прыжков.
    if (i === nums.length - 1) {
      return jumps;
    }

    // Update the maximum reach.
    // Обновляем максимальный диапазон.
    maxReach = Math.max(maxReach, i + nums[i]);

    // Decrement the number of steps.
    // Уменьшаем количество шагов.
    steps--;

    // If we have no more steps, increment the jump count and update the steps.
    // Если у нас больше нет шагов, увеличиваем количество прыжков и обновляем шаги.
    if (steps === 0) {
      jumps++;
      steps = maxReach - i;
    }
  }

  return jumps;
}

/*

This solution has a time complexity of O(n) and a space complexity of O(1), 
where n is the length of the array.

*/
