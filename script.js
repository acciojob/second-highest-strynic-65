function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;

  let max = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num < max && num > second) {
      second = num;
    }
  }

  return second === -Infinity ? -Infinity : second;
}

// Test cases
console.log(secondHighest([5, 1, 2, 3, 4]));     // Output: 4
console.log(secondHighest([-1, -2, -3, -4]));    // Output: -2
console.log(secondHighest([]));                 // Output: -Infinity
console.log(secondHighest([1]));                // Output: -Infinity
console.log(secondHighest([1, 1, 1]));           // Output: -Infinity
