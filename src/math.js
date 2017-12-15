const isNumber = num => Number.isNaN(Number(num)) === false;
const additionReducer = (acc, num) => acc + Number(num);
const subtractionReducer = (acc, num) => acc - Number(num);
const multiplyReducer = (acc, num, index) => (index === 0 ? Number(num) : acc * Number(num));

const mathFunctor = (fn, ...rest) => [...rest].filter(isNumber).reduce(fn, 0);

const add = (...numbers) => mathFunctor(additionReducer, ...numbers);
const subtract = (...numbers) => mathFunctor(subtractionReducer, ...numbers);
const multiply = (...numbers) => {
  const actualNumbers = numbers.filter(isNumber);

  if (actualNumbers.length < 2) {
    return 0;
  }

  return mathFunctor(multiplyReducer, ...actualNumbers);
};

export { add, subtract, multiply };
// Added a comment
// Added a comment
