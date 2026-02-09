# Jest Workshop Submission

## Student Details
- Name:Kumar Gautam
- Roll Number: 2024-B-04032004A
- GitHub Username: Gautam-Bharadwaj

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name: nocouponcase.test.js
**What it protects against:**  
Prevents bugs where coupons are incorrectly applied when no coupon is provided. Ensures that null, undefined, or empty string coupons result in no discount being applied. Also prevents the 5% bulk discount from failing for subtotals ≥ $1000.

---

### 2. Test Name: save10.test.js
**What it protects against:**  
Prevents bugs in the SAVE10 coupon logic such as incorrect percentage calculations, failure to apply the $100 maximum discount cap, and improper handling of the 5% bulk discount on large orders. Ensures the 10% discount is calculated correctly up to the $100 limit.

---

### 3. Test Name: flat50boundarycase.test.js
**What it protects against:**  
Prevents boundary value bugs with the FLAT50 coupon, including incorrect $50 discount application, failure to handle subtotals less than $50 (which should result in $0), and incorrect integration with the 5% bulk discount for orders ≥ $1000.

---

### 4. Test Name: invalidsubtotalthrowserror.test.js
**What it protects against:**  
Prevents crashes or silent failures when invalid inputs like negative numbers, NaN, or non-numeric values are passed. Ensures the function properly validates inputs and throws appropriate "Invalid subtotal" errors for bad data.

---

### 5. Test Name: caseinsensitivecoupon.test.js
**What it protects against:**  
Prevents case-sensitivity bugs where coupons like "save10", "SAVE10", or "SaVe10" would fail. Ensures the pricing function handles coupon codes case-insensitively, which improves user experience and prevents rejected valid coupons.

---

### 6. Test Name: example.test.js
**What it protects against:**  
Basic sanity check test to verify Jest is working correctly and that the test suite runs properly. Also validates input validation for negative subtotals.

---

## CI Pipeline (if implemented)
- Did CI pass successfully? (Yes / No) - Yes
- GitHub Actions Run URL: https://github.com/Gautam-Bharadwaj/jest-workshop/actions

---

## Reflection (1–2 lines)
What is **one thing** you understood better about testing or CI after this workshop?
---
Learned that automated testing with Jest catches regressions early, and GitHub Actions CI ensures code quality by running tests automatically on every push and pull request.
---

