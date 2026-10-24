// function twoSum(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

function twoSum(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let differnce = target - arr[i];
    if (map.has(differnce)) {
      return [i, map.get(differnce)];
    } else {
      map.set(arr[i], i);
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 13));
