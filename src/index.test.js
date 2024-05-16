// Fizzbuzz

// Divisible 3 => "Fizz"

// Divisible 5 => "Buzz"

// 3 and 5 => "Fizzbuzz"

// else => the number itself

// 15 => "Fizzbuzz"

// 0 => "Fizzbuzz"

const fizzbuzz = (number) => {
  if (number % 5 === 0 && number % 3 === 0) return 'Fizzbuzz';
  if (number % 3 === 0) return 'Fizz';
  if (number % 5 === 0) return 'Buzz';
  return number;
};

test("0 => 'Fizzbuzz'", () => {
  expect(fizzbuzz(0)).toEqual('Fizzbuzz');
});

test("3 => 'Fizz'", () => {
  expect(fizzbuzz(3)).toEqual('Fizz');
});

test("5 => 'Buzz'", () => {
  expect(fizzbuzz(5)).toEqual('Buzz');
});
