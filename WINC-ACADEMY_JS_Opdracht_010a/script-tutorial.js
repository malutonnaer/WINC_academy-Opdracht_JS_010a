// What can we do inside a function?
// - Put almost any kind of code
// - Put as much as I want

// Example 1 //

// const scream = function () {
//   console.log("Aaaaaaaaa");
// };

// scream();

// const makeNoise = function () {
//   scream();
// };

// makeNoise();

// Example 2 //

// const add = function (numberA, numberB) {
//   return numberA + numberB;
// };
 
// const doCalculation = function () {
//   const outcome = add(2, 4)
//   console.log(outcome)
// };

// doCalculation();

// Example 3 (incl logging every step of the function) //

const makePositive = function (number) {
    console.log("Entering makePositive..");
    console.log("Input: ", number);
    const result = Math.abs(number);
    console.log("Output: ", result)
    return result;
  };
  
  // makePositive(-1);
  
  const makeBigger = function (number) {
    console.log("Entering makeBigger..");
    console.log("Input: ", number);
    let result = number;
    if (number < 10) {
      result = 10 + number;
    }
    console.log("Output ", result);
    return result;
  };
  
  // makeBigger(-1);
  
  const square = function (number) {
    console.log("Entering square..");
    console.log("Input: ", number);
    const result = number * number;
    console.log("Output: ", result);
    return result;
  };
  
  // square(-1);
  
  const doComplexCalculation = function (number) {
    console.log("Entering doComplexCalculation..");
    console.log("Input: ", number);
    const positiveNumber = makePositive(number);
    const bigNumber = makeBigger(positiveNumber);
    const squaredNumber = square(bigNumber);
    console.log("Output: ", squaredNumber);
    return squaredNumber;
  };
  
  console.log(doComplexCalculation(-1));
  