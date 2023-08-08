// create a function to shuffle an array in place

let arr1 = [1,2,3,4,5]

const shuffle = (arr) => {
  for(let i=0;i<arr.length;i++) {
    let x = Math.floor(Math.random()*(arr.length))
    let temp = arr[i]
    arr[i] = arr[x]
    arr[x] = temp
  }
  return arr
}

shuffle(arr1)
console.log(arr1)