const arr1 = [4, 2, 1, 3, 5]                      // [1, 4, 2, 3, 5]
const arr2 = [1, 5, 8, 10, 3, 2]                  // [1, 5, 8, 10, 3, 2]
const arr3 = [3.14, 2.718, 1.618, 0.577, 4.669]   // [0.577, 3.14, 2.718, 1.618, 4.669]
const arr4 = [2, 4.5, 7, 1.2, 3, 9.8]             // [1.2, 2, 4.5, 7, 3, 9.8]

const minToFront = (arr) => {
  let minObj = {};
  let min = arr[0]
  let newArr = []
  for(let i = 0; i<arr.length;i++) {
    if(arr[i] < min) {
      min = arr[i];
    }
  }
  newArr.push(min)
  for(let i = 0; i<arr.length;i++) {
    if(arr[i] == min) {
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr
}

console.log(minToFront(arr1))
console.log(minToFront(arr2))
console.log(minToFront(arr3))
console.log(minToFront(arr4))