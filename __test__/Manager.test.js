const Manager = require("../src/Manager");

test("Create a manager", () => {
  const manager = new Manager("Joshua", 1, "josh@email.com", 10);

  expect(manager.office).toEqual(expect.any(Number));
});
