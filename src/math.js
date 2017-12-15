const isNumber = num => Number.isNaN(Number(num)) === false;
const additionReducer = (acc, num) => acc + Number(num);
const subtractionReducer = (acc, num) => acc - Number(num);
const multiplyReducer = (acc, num) => acc * Number(num);

const mathFunctor = (fn, ...rest) => [...rest].filter(isNumber).reduce(fn, 0);

const add = (...numbers) => mathFunctor(additionReducer, ...numbers);
const subtract = (...numbers) => mathFunctor(subtractionReducer, ...numbers);
const multiply = (...numbers) => mathFunctor(multiplyReducer, ...numbers);

export { add, subtract, multiply };
