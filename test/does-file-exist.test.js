"use strict";

var proxyquire = require("proxyquire");
var sinon = require("sinon");
var assert = require("referee").assert;

var doesFileExist; // the module to test
var existsSyncStub; // the fake method on the dependency

describe("doesFileExist", function() {
    beforeEach(function() {
        existsSyncStub = sinon.stub(); // create a stub for every test

        // import the module to test, using a fake dependency
        doesFileExist = proxyquire("../lib/does-file-exist", {
            // fs: {
            //     existsSync: existsSyncStub
            "../lib/mytools": {
                xmlParse: existsSyncStub
            }
        });
    });

    describe("when a path exists", function() {
        beforeEach(function() {
            existsSyncStub.returns(true); // set the return value that we want
        });

        it("should return `true`", function() {
            var actual = doesFileExist("9d7af804-4719-4578-ba1d-5dd8a4dae89f");
            doesFileExist("9d7af804-4719-4578-ba1d-5dd8a4dae89f");

            let testRet = existsSyncStub.calledWith(
                "9d7af804-4719-4578-ba1d-5dd8a4dae89f"
            );
            console.log("testRet:" + testRet);

            testRet = existsSyncStub.callCount;
            console.log("testRet2:" + testRet);

            assert.isTrue(actual);
        });
    });
});
