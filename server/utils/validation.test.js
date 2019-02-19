const expect = require("expect");
const { isRealString } = require("./validation");

describe("isRealString", () => {
  it("should reject nonstring values", () => {
    var result = isRealString(12345);

    expect(result).toBeFalsy();
  });
  it("should reject strings with only spaces", () => {
    var result = isRealString("     ");

    expect(result).toBeFalsy();
  });
  it("should allow string with non-space characters", () => {
    var result = isRealString("  Clockwork Orange   ");

    expect(result).toBeTruthy();
  });
});
