const { divide, multiply, sum } = require("../02-math");

describe("test in 02-math", () => {
  test("add 1 + 3 shuold be 4", () => {
    const res = sum(1, 3);
    expect(res).toBe(4);
  });

  test("shuold be 4", () => {
    const res = multiply(2, 2);
    expect(res).toBe(4);
  });

  test("shuold be 1", () => {
    const res = divide(2, 2);
    expect(res).toBe(1);
  });

  test("shuold be null", () => {
    const res = divide(2, 0);
    expect(res).toBeNull();
  });


});
