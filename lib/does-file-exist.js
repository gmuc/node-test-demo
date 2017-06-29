"use strict";

var fs = require("fs");
var mtools = require("../lib/mytools");

function doesFileExist(path) {
    console.log("call doesFileExist");
    return mtools.xmlParser(path);
    // return fs.existsSync(path);
}
module.exports = doesFileExist;
