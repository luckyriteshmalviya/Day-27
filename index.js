// Find the kth largest number of the Array

let array1 = [1, 78, 43, 4, 2, 5, 7, 22, 33];
let k = 4;

console.log(FindKLargest(array1, k));

// Approach Number 1 (By Sorting)
function FindKLargest(arr, k) {
  if (k === 0 || k > arr.length) return "k is not valid";
  let obj = {};
  for (let i of arr) {
    obj[i] = true;
  }
  let sortedArr = Object.keys(obj);
  return sortedArr[array1.length - k];
}

// =======================================================================================================

// Approach Number 2 (By Ritesh)
// function FindKLargest(inp, k) {
// if (k === 0 || k > arr.length) return "k is not valid";
//   let arr = inp;
//   while (k > 1) {
//     let max = findMax(arr);
//     arr.splice(arr.indexOf(max), 1);
//     k--;
//   }
//   return findMax(arr);
// }

// ========================================================================================================

function findMax(arr) {
  let max = 0;
  for (let i of arr) {
    if (max < i) max = i;
  }
  return max;
}

function findMin(arr) {
  let min = 0;
  for (let i of arr) {
    if (min > i) min = i;
  }
  return min;
}

// =========================================================================================================

// Approach Number 3 (By Ankit)

// function FindKLargest(arr, k) {
// if (k === 0 || k > arr.length) return "k is not valid";
//   let max = findMax(arr);
//   if (k === 1) return max;
//   let min = findMin(arr);
//   let obj = {};
//   for (let i of arr) {
//     obj[i] = true;
//   }
//   let match = 1;
//   for (let i = max - 1; i >= min; i--) {
//     if (obj.hasOwnProperty(i)) {
//       match++;
//       if (match === k) return i;
//     }
//   }
// }

// ===========================================================================================================
