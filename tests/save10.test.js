const { calculateFinalAmount } = require("../src/pricing");

test("SAVE10 coupon - applies 10% discount up to $100", () => {
  expect(calculateFinalAmount(100, "SAVE10")).toBe(90);
  expect(calculateFinalAmount(500, "SAVE10")).toBe(450);
  expect(calculateFinalAmount(1000, "SAVE10")).toBe(850); // 950 - 10% of 1000 = 95
});

test("SAVE10 coupon - caps at $100 discount", () => {
  expect(calculateFinalAmount(1500, "SAVE10")).toBe(1325); // 1425 - 100 = 1325
});

