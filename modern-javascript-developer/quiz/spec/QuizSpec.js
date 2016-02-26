"use strict";

describe("The specification for battling robots", function() {

  it("should have a Robot function", function() {
    expect(Robot).toBeDefined();
  });

  it("should return false if there are 100+ words", function() {
    expect(checkWordCount(string)).toBe(false);
     //expect(add(2, 5)).toBe(7);
  });

  it("should have a duplicateCheck function",  function() {
    expect(duplicateCheck).toBeDefined();
  });

  it("should return false if a string has duplicate words", function() {
    expect(duplicateCheck(string)).toBe(false);
  });

  it("should have an verifyAlphaNumeric function", function() {
    expect(verifyAlphaNumeric).toBeDefined();
  });

  it("should returnfalse if there are non-alphanumeric characters", function() {
    expect(verifyAlphaNumeric(string)).toBe(false);
  });

});