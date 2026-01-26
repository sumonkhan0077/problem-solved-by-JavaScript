// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.
// Example:
// Input: 5
// Output: 120

// const number = 5;
// let result = 1;
// for (let i = 1; i <= number; i++  ){
//        result= result * i ;
// }
// console.log(result)
// console.log(b)

function UseState(initialValue) {
  let state = initialValue;

  function setState(newValue) {
    state = newValue;
    render(); 
  }

  function getState() {
    return state;
  }

  return [getState, setState];
}

function render() {
  console.log("Count:", count());
}

const [count, setCount] = UseState(0);

render();        // Count: 0
setCount(1);     // Count: 1
setCount(2);     // Count: 2
