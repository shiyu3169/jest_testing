const functions = require("./functions");

// Run before and after each test
beforeEach(() => initDatabase());
afterEach(() => closeDatabase());

// Run before and after all tests
beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log("database Initialized...");
const closeDatabase = () => console.log("database closed...");

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

// Less than and greater than
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test("This is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

// Arrays
test("Admin should be in usernames", () => {
  const usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// Working with async data

// Promise
test("User fetched name should be Leanee Graham ", () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

// Async Await
test("User fetched name should be Leanee Graham ", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
