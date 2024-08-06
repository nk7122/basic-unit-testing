import { describe, it, expect } from "vitest";
import { sumAndPlusTen, maxNum, factorial } from "./basic";

describe("sumAndPlusTen", () => {
  it("should return the sum of a + b + 10 when a, b is interger", () => {
    // AAA Patern.
    // Arrange - Set up the test.
    const a = 5;
    const b = 10;

    // Act - Execute the test.
    const result = sumAndPlusTen(a, b);

    //  Assert - Check result.
    expect(result).toBe(25);
  });
  it("should return NaN if there is no parameter provided", () => {
    const a = 5;
    const b = 10;

    const result = sumAndPlusTen;

    expect(result).toBeNaN; // toBe(NaN) = toBeNaN (sudah menjadi tools dalam system).
  });
});

describe("maxNum", () => {
  it("should return the 2nd argument when it is greater", () => {
    expect(maxNum(5, 10)).toBe(10);
  });

  it("should return the 1st argument when it is greater", () => {
    expect(maxNum(50, 1)).toBe(50);
  });

  it("should return the 1st argument when both arguments are equals", () => {
    expect(maxNum(5, 5)).toBe(5);
  });

  it("should throw an error if one of the arguments is not a number", () => {
    expect(() =>
      maxNum(5, "10").toThrowError("All the arguments must be a number!")
    );
  });
});

describe("factorial", () => {
  it("should return 0 if the input is negative", () => {
    expect(factorial(-1)).toBe(0);
  });

  it("should return 1 if the input is 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 6 when in put is 3", () => {
    expect(factorial(3)).toBe(6);
  });

  it("should return 120 when in put is 5", () => {
    expect(factorial(5)).toBe(120);
  });

  it("should throw error if the input is not a number", () => {
    expect(() => factorial("")).toThrowError("Input Must be a number"); // jika menggunakan throw error, harus ada function(() =>) didalam expect -> expect(() => sebuahFunction()).
  });
});
