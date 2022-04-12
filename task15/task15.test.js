const Calculator = require("../task15/calculator");

const calc = new Calculator();

describe("Calculator tests", function () {
  //add function
  test("should check add function", async () => {
    let result = calc.add(2, 4, 6);
    expect(result).toEqual(12);
  });

  test("should check negative value", async () => {
    let result = calc.add(-2, 4, -6);
    expect(result).toEqual(-4);
  });

  test("should check string", async () => {
    let result = calc.add(2, "4", 6);
    expect(result).toEqual(12);
  });

  test("should check Infinity", async () => {
    let result = calc.add(2, Infinity, 6);
    expect(result).toEqual(Infinity);
  });
  test("should check NaN", async () => {
    let result = calc.add(2, NaN, 6);
    expect(result).toBeNaN();
  });
  test("should check add fractional numbers function", async () => {
    let result = calc.add(2, 4.1);
    expect(result).toEqual(6.1);
  });
  //multiply function
  test("should check multiply function", async () => {
    let result = calc.multiply(0, 2, 6);
    expect(result).toEqual(0);
  });
  test("should check multiply function with string", async () => {
    let result = calc.multiply(2, "6");
    expect(result).toEqual(NaN);
  });
  test("should check multiply function with negative numbers", async () => {
    let result = calc.multiply(-2, 6);
    expect(result).toEqual(-12);
  });
  test("should check multiply function with NaN", async () => {
    let result = calc.multiply(NaN, 6);
    expect(result).toEqual(NaN);
  });
  //subtraction function
  test("should check subtraction function", async () => {
    let result = calc.subtraction(8, 4);
    expect(result).toEqual(4);
  });
  test("should check subtraction with string function", async () => {
    let result = calc.subtraction(8, "2");
    expect(result).toEqual(NaN);
  });
  test("should check subtraction with negative numbers", async () => {
    let result = calc.subtraction(-8, 4);
    expect(result).toEqual(-12);
  });
  test("should check subtraction with boolean function", async () => {
    let result = calc.subtraction(8, false);
    expect(result).toEqual(NaN);
  });
  test("should check subtraction with Infinity function", async () => {
    let result = calc.subtraction(8, Infinity);
    expect(result).toEqual(Infinity);
  });
  //devide function
  test("should check devide function", async () => {
    let result = calc.divide(8, 0);
    expect(result).toEqual(Infinity);
  });
  test("should check devide function with remander", async () => {
    let result = calc.divide(10, 3);
    expect(result).toEqual(3.3);
  });
  test("should check devide function with boolean", async () => {
    let result = calc.divide(10, 1);
    expect(result).toEqual(NaN);
  });
  test("should check devide function with string", async () => {
    let result = calc.divide(10, "2");
    expect(result).toEqual(NaN);
  });
  test("should check devide function with fractional number", async () => {
    let result = calc.divide(1.1, 10);
    expect(result).toEqual(0.11);
  });
  //exponentiation function
  test("should check exponentiation function", async () => {
    let result = calc.exponentiation(3);
    expect(result).toEqual(9);
  });
  test("should check exponentiation function with negative numbers", async () => {
    let result = calc.exponentiation(-2);
    expect(result).toEqual(4);
  });
  test("should check exponentiation function with string", async () => {
    let result = calc.exponentiation("2");
    expect(result).toEqual(NaN);
  });
  test("should check exponentiation function with boolean", async () => {
    let result = calc.exponentiation(true);
    expect(result).toEqual(NaN);
  });
  test("should check exponentiation function with Infinity", async () => {
    let result = calc.exponentiation(Infinity);
    expect(result).toEqual(Infinity);
  });
});
