const Intern = require("../src/Intern");

test("create intern", () => {
  const intern = new Intern("Jenny", 4, "jenny@email.com", "UCF");

  expect(intern.school).toBe("UCF");
});
