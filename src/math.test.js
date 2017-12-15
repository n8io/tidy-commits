import { add, subtract } from './math';

test(`Expect add(1, 2) to equal 3`, () => {
  const inputs = [1, 2];
  const expected = 3;
  const actual = add(...inputs);

  expect(actual).toBe(expected);
});

test(`Expect add(1, 2, 3) to equal 6`, () => {
  const inputs = [1, 2, 3];
  const expected = 6;
  const actual = add(...inputs);

  expect(actual).toBe(expected);
});

test(`Expect add('1', 2) to equal 3`, () => {
  const inputs = ['1', 2];
  const expected = 3;
  const actual = add(...inputs);

  expect(actual).toBe(expected);
});

test(`Expect add('a', 2) to equal 2`, () => {
  const inputs = ['a', 2];
  const expected = 2;
  const actual = add(...inputs);

  expect(actual).toBe(expected);
});

test(`Expect add(Infinity, 2) to equal Infinity`, () => {
  const inputs = [Infinity, 2];
  const expected = Infinity;
  const actual = add(...inputs);

  expect(actual).toBe(expected);
});

test(`Expect add(null, 2) to equal 2`, () => {
  const inputs = [null, 2];
  const expected = 2;
  const actual = add(...inputs);

  expect(actual).toBe(expected);
});

test(`Expect add(undefined) to equal 0`, () => {
  const inputs = [undefined];
  const expected = 0;
  const actual = add(...inputs);

  expect(actual).toBe(expected);
});

test(`Expect add() to equal 0`, () => {
  const inputs = [];
  const expected = 0;
  const actual = add(...inputs);

  expect(actual).toBe(expected);
});

test(`Expect add({}) to equal 0`, () => {
  const inputs = [{}];
  const expected = 0;
  const actual = add(...inputs);

  expect(actual).toBe(expected);
});

test(`Expect add(false) to equal 0`, () => {
  const inputs = [false];
  const expected = 0;
  const actual = add(...inputs);

  expect(actual).toBe(expected);
});

test(`Expect add([]) to equal 0`, () => {
  const inputs = [[]];
  const expected = 0;
  const actual = add(...inputs);

  expect(actual).toBe(expected);
});

test(`Expect add([1,2,3]) to equal 0`, () => {
  const inputs = [1, 2, 3];
  const expected = 0;
  const actual = add(inputs);

  expect(actual).toBe(expected);
});

test(`Expect subtract('') to equal 0`, () => {
  const inputs = [''];
  const expected = 0;
  const actual = subtract(...inputs);

  expect(actual).toBe(expected);
});

test(`Expect subtract(1, 2) to equal -1`, () => {
  const inputs = [1, 2];
  const expected = -3;
  const actual = subtract(...inputs);

  expect(actual).toBe(expected);
});

test(`Expect subtract(1, 2, 3) to equal -6`, () => {
  const inputs = [1, 2, 3];
  const expected = -6;
  const actual = subtract(...inputs);

  expect(actual).toBe(expected);
});

test(`Expect subtract('1', 2) to equal -3`, () => {
  const inputs = ['1', 2];
  const expected = -3;
  const actual = subtract(...inputs);

  expect(actual).toBe(expected);
});

test(`Expect subtract('a', 2) to equal -2`, () => {
  const inputs = ['a', 2];
  const expected = -2;
  const actual = subtract(...inputs);

  expect(actual).toBe(expected);
});

test(`Expect subtract(Infinity, 2) to equal -Infinity`, () => {
  const inputs = [Infinity, 2];
  const expected = -Infinity;
  const actual = subtract(...inputs);

  expect(actual).toBe(expected);
});

test(`Expect subtract(null, 2) to equal -2`, () => {
  const inputs = [null, 2];
  const expected = -2;
  const actual = subtract(...inputs);

  expect(actual).toBe(expected);
});

test(`Expect subtract(undefined) to equal 0`, () => {
  const inputs = [undefined];
  const expected = 0;
  const actual = subtract(...inputs);

  expect(actual).toBe(expected);
});

test(`Expect subtract() to equal 0`, () => {
  const inputs = [];
  const expected = 0;
  const actual = subtract(...inputs);

  expect(actual).toBe(expected);
});

test(`Expect subtract({}) to equal 0`, () => {
  const inputs = [{}];
  const expected = 0;
  const actual = subtract(...inputs);

  expect(actual).toBe(expected);
});

test(`Expect subtract(false) to equal 0`, () => {
  const inputs = [false];
  const expected = 0;
  const actual = subtract(...inputs);

  expect(actual).toBe(expected);
});

test(`Expect subtract([]) to equal 0`, () => {
  const inputs = [[]];
  const expected = 0;
  const actual = subtract(...inputs);

  expect(actual).toBe(expected);
});

test(`Expect subtract([1,2,3]) to equal 0`, () => {
  const inputs = [1, 2, 3];
  const expected = 0;
  const actual = subtract(inputs);

  expect(actual).toBe(expected);
});

test(`Expect subtract('') to equal 0`, () => {
  const inputs = [''];
  const expected = 0;
  const actual = subtract(...inputs);

  expect(actual).toBe(expected);
});
