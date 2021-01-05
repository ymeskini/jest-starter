const sum = require("./app");

describe("sum", () => {
  test("should run", () => {
    expect(sum()).toBe(2);
  });
});
