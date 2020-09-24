const assert = require("assert");
const { lib, c_str } = require("../renderer");
describe.only("test", function () {
  it("zzz", function () {
    assert.strictEqual(
      lib.MessageBoxW(0, c_str("test"), c_str("from js"), 0),
      1
    );
  });
});
