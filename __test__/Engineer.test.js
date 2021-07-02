const Engineer = require("../lib/Engineer");

test("create engineer", () => {
  const engineer = new Engineer("Bob", 2, "Bob@email.com", "github.com/bob");

  expect(engineer.github).toBe("github.com/bob");
});
