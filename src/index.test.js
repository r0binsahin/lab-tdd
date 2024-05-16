// Fizzbuzz

// Divisible 3 => "Fizz"

// Divisible 5 => "Buzz"

// 3 and 5 => "Fizzbuzz"

// else => the number itself

// 15 => "Fizzbuzz"

// 0 => "Fizzbuzz"

const fizzbuzz = (number) => {
  return "Fizzbuzz";
};

test("0 => 'Fizzbuzz'", () => {
  expect(fizzbuzz(0)).toEqual("Fizzbuzz");
});
