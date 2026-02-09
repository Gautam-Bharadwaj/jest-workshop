const { calculateFinalAmount } = require("../src/pricing");

test("FLAT50 coupon - applies $50 discount", () => {
  expect(calculateFinalAmount(100, "FLAT50")).toBe(50);
  expect(calculateFinalAmount(200, "FLAT50")).toBe(150);
});

test("FLAT50 coupon - handles subtotal less than 50", () => {
  expect(calculateFinalAmount(30, "FLAT50")).toBe(0);
});

test("FLAT50 coupon - with 5% discount on subtotal >= 1000", () => {
  expect(calculateFinalAmount(1000, "FLAT50")).toBe(950 - 50);
});

