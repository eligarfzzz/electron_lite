// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
function c_str(text) {
  return Buffer.from(text + "\0", "ucs2");
}
const ffi = require("ffi-napi");
const lib = new ffi.Library("user32", {
  MessageBoxW: ["int32", ["int32", "string", "string", "int32"]],
});
function getCurrentWidnow() {
  return require("electron").remote.getCurrentWindow();
}

function maximize() {
  getCurrentWidnow().maximize();
}

function minimize() {
  getCurrentWidnow().minimize();
}
exports.lib = lib;
exports.c_str = c_str;
