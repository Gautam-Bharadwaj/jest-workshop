const { calculateFinalAmount } = require("../src/pricing");

test("case insensitive coupon - SAVE10 works in lowercase", () => {
  expect(calculateFinalAmount(100, "save10")).toBe(90);
  expect(calculateFinalAmount(100, "Save10")).toBe(90);
});

test("case insensitive coupon - FLAT50 works in lowercase", () => {
  expect(calculateFinalAmount(100, "flat50")).toBe(50);
  expect(calculateFinalAmount(100, "Flat50")).toBe(50);
});

test("case insensitive coupon - mixed case works", () => {
  expect(calculateFinalAmount(100, "SaVe10")).toBe(90);
  expect(calculateFinalAmount(100, "FlAt50")).toBe(50);
});

