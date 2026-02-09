const { calculateFinalAmount } = require("../src/pricing");

test("invalid subtotal - throws error for negative numbers", () => {
  expect(() => calculateFinalAmount(-10, "SAVE10")).toThrow("Invalid subtotal");
});

test("invalid subtotal - throws error for NaN", () => {
  expect(() => calculateFinalAmount(NaN, "SAVE10")).toThrow("Invalid subtotal");
});

test("invalid subtotal - throws error for non-numbers", () => {
  expect(() => calculateFinalAmount("100", "SAVE10")).toThrow("Invalid subtotal");
});

