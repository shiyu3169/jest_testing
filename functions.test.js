const functions = require("./functions");

// To be test
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// Not to be test
test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// Check for truthy & falsy values
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false
test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

// Compare objects
test("User should be Shiyu Wang object", () => {
  expect(functions.createUser()).toStrictEqual({
    firstName: "Shiyu",
    lastName: "Wang"
  });
});
