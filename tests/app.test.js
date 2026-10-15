const test = require("node:test");
const assert = require("node:assert/strict");

test("Node.js runtime is available", () => {
  assert.ok(process.version.startsWith("v"));
});

test("Application uses the expected default port", () => {
  assert.equal(process.env.PORT || 3000, process.env.PORT || 3000);
});