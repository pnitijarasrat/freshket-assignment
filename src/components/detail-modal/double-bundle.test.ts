import doubleBundle from "./double-bundle";

const threePinks = [{ id: "pink", name: "Pink Set", price: 80, amount: 3 }];

const fourPinks = [{ id: "pink", name: "Pink Set", price: 80, amount: 4 }];
const fivePinks = [{ id: "pink", name: "Pink Set", price: 80, amount: 5 }];
const fivePinksThreeReds = [
  { id: "pink", name: "Pink Set", price: 80, amount: 5 },
  { id: "red", name: "Red Set", price: 50, amount: 3 },
];
const fivePinksThreeYellow = [
  { id: "pink", name: "Pink Set", price: 80, amount: 5 },
  { id: "orange", name: "Orange Set", price: 120, amount: 3 },
];

test("discount with only 3 sets of Pinks", () => {
  expect(doubleBundle(threePinks, "pink")).toBe(8);
});

test("discount with only 4 sets of Pinks", () => {
  expect(doubleBundle(fourPinks, "pink")).toBe(16);
});

test("discount with only 5 sets of Pinks", () => {
  expect(doubleBundle(fivePinks, "pink")).toBe(16);
});

test("discount with 5 sets of Pinks and 3 sets of Red", () => {
  expect(doubleBundle(fivePinksThreeReds, "pink")).toBe(16);
});

test("discount with 5 sets of Pinks and 3 sets of orange", () => {
  expect(doubleBundle(fivePinksThreeYellow, "pink")).toBe(16);
  expect(doubleBundle(fivePinksThreeYellow, "orange")).toBe(12);
});
