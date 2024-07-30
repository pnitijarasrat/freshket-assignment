import membershipDiscount from "./membership-discount";

test("Discount with membership", () => {
  expect(membershipDiscount(100, true)).toBe(10);
});

test("Discount without membership", () => {
  expect(membershipDiscount(100, false)).toBe(0);
});
