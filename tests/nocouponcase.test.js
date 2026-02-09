const { calculateFinalAmount } = require("../src/pricing");

test("no coupon case - calculates correctly without coupon", () => {
  expect(calculateFinalAmount(100, null)).toBe(100);
  expect(calculateFinalAmount(100, undefined)).toBe(100);
  expect(calculateFinalAmount(100, "")).toBe(100);
});

test("no coupon case - subtotal 1000 applies 5% discount", () => {
  expect(calculateFinalAmount(1000, null)).toBe(950);
});

