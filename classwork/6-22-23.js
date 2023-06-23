countDown = (num) => {
  console.log(num);
  if(num == 0) {
    return "Blast Off"
  }
  return countDown(num-1)
}

test =() => {
  return "test"
}

console.log(countDown(5))

// console.log(test())