const Employee = require("../lib/Employee");

test("Check to see what employee name is?", () => {
  const employee = new Employee("Bob", 1, "email@email.com");
  expect(employee.name).toBe("Bob");
});

test("Check to see what employee ID is", () => {
  const employee = new Employee("Bob", 1, "email@email.com");
  expect(employee.id).toEqual(expect.any(Number));
});

test("Check employee email", () => {
  const employee = new Employee("Bob", 1, "email@email.com");
  expect(employee.email).toBe("email@email.com");
});
