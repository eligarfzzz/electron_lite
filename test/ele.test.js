const assert = require("assert");
const { lib, c_str } = require("../javascript/renderer");
describe.only("test", function () {
  it("zzz", function () {
    assert.strictEqual(
      lib.fnffitest(),
      42
    );
  });
});
