/*
Given an array of integers
return the index where the smallest integer is located
return -1 if there is no smallest integer (array is empty)
since -1 is not a valid index, this indicates it couldn't be found
If the smallest integer occurs more than once, return the index of the first one.
*/
// num = 1 <- assignment
// num == 1 <- comparison

const nums1 = [5, 2, 3]
const expected1 = 1

const nums2 = [5, 7, 2, 3]
const expected2 = 2

const nums3 = []
const expected3 = -1

// function indexOfMinVal(nums) {
//     let min = nums[0];
//     for(let i=0; i < nums.length; i++) {
//       if (nums[i] < min) {
//         min = i
//       }
//     }
//     if(min == null) {
//       console.log("-1")
//       return -1
//     }
//     else {
//       console.log(min)
//       return min
//     }
// }

function indexOfMinVal(nums) {
  if(nums.length <1) { return -1}
  let min = {
    index: 0,
    value: nums[0]
  }
  for(let i=0; i < nums.length; i++) {
    if(nums[i] < min.value) {
      min.value = nums[i]
      min.index = i
    }
  }
  return min.index
}

// console.log("expected: 1 -> ", indexOfMinVal(nums1));
// console.log("expected: 2 -> ", indexOfMinVal(nums2));
// console.log("expected: -1 -> ", indexOfMinVal(nums3));
// console.log("********************************************************************************")


/* ******************************************************************************** */

/*
Array: Second-Largest
Return the second-largest element of an array, or null if there is none.
Bonus: do it with one loop and no nested loops
*/



// function secondLargest(nums) {
//   let secondLargest = nums[0];
//   for(let i=0; i < nums.length; i++) {
//     if(nums[1] < i) {
//       return i
//     }
//   }
//   if(nums[5] != secondLargest) {
//     return null
//   }
//   if(secondLargest != []) {
//     return null
//   }
// }

// function secondLargest(nums) {
//   let secondLargest = nums[0];  // 2
//   let largest = nums[0] // 2
//   if(nums.length < 2) {
//     return null
//   }
//   for(let i=0; i < nums.length; i++) {
//     if(nums[i] < largest) {
//       if(nums[i] > secondLargest) {
//         secondLargest = nums[i]
//       }
//     }
//   }
//   return secondLargest
// }

const nums4 = [2, 3, 1, 4, 5]
const expected4 = 4

const nums5 = [3, 3]
const expected5 = null

const nums6 = [2]
const expected6 = null

const nums7 = []
const expected7 = null

const nums8 = [14, 21, 3, 6, 45, 12]
const expected8 = 21

const nums9 = [5, 5, 5, 5, 1]
const expected9 = 1

const nums10 = [2, 5, 5]
const expected10 = 2


function secondLargest(nums) {
  if(nums.length <2) { return null}
  let largest = nums[0]
  let secondLargest = -10000
  for(let i=0; i < nums.length; i++) {
    if(nums[i] > largest ) {
      secondLargest = largest
      largest = nums[i]
    }
    else if(nums[i] > secondLargest && nums[i] < largest) {
      secondLargest = nums[i]
    }
  }
  if(secondLargest == -10000) {return null}
  return secondLargest
}

console.log(expected4, "=", secondLargest(nums4));
console.log(expected5, "=", secondLargest(nums5));
console.log(expected6, "=", secondLargest(nums6));
console.log(expected7, "=", secondLargest(nums7));
console.log(expected8, "=", secondLargest(nums8));
console.log(expected9, "=", secondLargest(nums9));
console.log(expected10, "=", secondLargest(nums10));