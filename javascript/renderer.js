// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

// ffi模块函数导出
function c_str(text) {
  return Buffer.from(text + "\0", "ucs2");
}
const ffi = require("ffi-napi");
const lib = new ffi.Library("./libs/ffitest.dll", {
  fnffitest: ["int32", []],
});

// electron模块函数导出
function getCurrentWidnow() {
  return require("electron").remote.getCurrentWindow();
}

function maximize() {
  getCurrentWidnow().maximize();
}

function minimize() {
  getCurrentWidnow().minimize();
}
function maxUnmaxWindow(){
  const curwin = getCurrentWidnow();
  if(curwin.isMaximized()){
    curwin.unmaximize();
  }else{
    curwin.maximize();
  }
}
exports.lib = lib;
exports.c_str = c_str;
