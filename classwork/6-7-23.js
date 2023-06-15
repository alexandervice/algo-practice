// Edge case for zero
// If divisible by 3 console log("Fizz")
// If divisible by 5 console log("Buzz")
// If divisible by both console log("FizzBuzz")

function fizzBuzz(_list) {
    for(i=0; i< _list.length; i++) {
      if(_list[i] == 0 || _list[i] == null) {
        console.log("edge case ~ zero or null");
      }
      else if(_list[i] % 5 == 0 && _list[i] % 3 == 0) {
        console.log("FizzBuzz");
      }
      else if(_list[i] % 5 ==0) {
        console.log("Buzz");
      }
      else if(_list[i] % 3 == 0) {
        console.log("Fizz");
      }
      else{
        console.log(_list[i]);
      }
    }
};


fizzBuzz([1,5,8,2,"hello",879, 93.42 ,"Fizz",true, 15, 93, -42, 0, null, [1,2,3,15]])