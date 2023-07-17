let arr1 = [5,7,2,3,-14,4,2]
let arr2 = [-1,-5,-8,-10,-3,-2, "test", 1, "two", 3]
let arr3 = ["a", "b", "c", "d"]

// Remove Negatives
// ****** Directions ******
//Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions.

const removeNegatives = (arr) => {
  let newArr = []
  for(let i=0; i<arr.length;i++) {
    if(arr[i] >= 0 || typeof(arr[i]) != "number") {
      newArr.push(arr[i])
    }
  }
  return newArr
}

const removeNegatives2 = (arr) => {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] >= 0 || typeof(arr[j]) != "number") {
      arr[i] = arr[j];
      i++;
    }
  }
  arr.length = i; // Truncate the array to remove remaining elements
  return arr;
};

// console.log(removeNegatives2(arr1))
// console.log(removeNegatives2(arr2))
// console.log(removeNegatives2(arr3))

//______________________________________________________________________________

// Second-to-Last
// ****** Directions ******
// Return the second-to-last element of an array. Given [42,true,4,"Kate",7], return "Kate". If array is too short, return null.

const secondToLast = (arr) => {
  if(arr.length <2) {
    return null
  }
  return arr[arr.length-2]
}

// console.log(secondToLast(arr1))
// console.log(secondToLast(arr2))
// console.log(secondToLast(arr3))

//______________________________________________________________________________

// Second-Largest
// ****** Directions ******
// Return the second-largest element of an array. Given [42,1,4,Math.PI,7], return 7. If the array is too short, return null.


// assume every value in the array is a number
const arr4 = [1,2,3,4,5,6,7,8,9]
const arr5 = [-1,-2,-3,-4,-5,-6,-7,-8,-9]
const arr6 = [100, 200, 50000, 17, 200, 199]
const arr7 = [9,8]


const secondLargest = (arr) => {
  if(arr.length <2) {
    return null
  }
  let biggest = arr[0]
  let secondBiggest = arr[0]
  for(let j=0;j<arr.length;j++) {
    if(arr[j] >= biggest) {
      biggest = arr[j]
    } else {
      secondBiggest = arr[j]
    }
  }
  for(let i=0;i<arr.length;i++) {
    if(arr[i] > secondBiggest && arr[i] < biggest) {
      secondBiggest = arr[i]
    }
  }
  if(biggest == secondBiggest) {
    return null
  }
  return secondBiggest
}

//______________________
//Here is what chatGPT gave me to improve the code
const secondLargest2 = (arr) => {
  if (arr.length < 2) {
    return null;
  }

  //set biggest to the larger number between the first 2 numbers of the array
  let biggest = Math.max(arr[0], arr[1]);
  //set secondBiggest to the smaller number between the first 2 numbers of the array
  let secondBiggest = Math.min(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > biggest) {
      secondBiggest = biggest;
      biggest = arr[i];
    } else if (arr[i] > secondBiggest && arr[i] < biggest) {
      secondBiggest = arr[i];
    }
  }

  if (biggest === secondBiggest) {
    return null;
  }
  return secondBiggest;
};

// console.log(secondLargest2(arr4))
// console.log(secondLargest2(arr5))
// console.log(secondLargest2(arr6))
// console.log(secondLargest2(arr7))

//______________________________________________________________________________

// Nth-to-Last
// ****** Directions ******
// Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), return 4. If the array is too short, return null.

const nthToLast = (arr, n) => {
  if(arr.length-n) {
    return arr[arr.length-n]
  } else {
    return null
  }
}

console.log(nthToLast(arr1,2))