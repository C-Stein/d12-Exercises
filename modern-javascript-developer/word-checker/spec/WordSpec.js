// Write a test suite to validate your JavaScript functions.

// There should be a function defined with the name checkWordCount.
// That function should return false if a string sent to it has more than 100 words in it.
// There should be a function defined with the name duplicateCheck.
// That function should return false if a string has duplicate words in it.
// There should be a function defined with the name verifyAlphaNumeric.
// That function should return false if there are any non-alphanumeric characters in a string.
// Now that the test suite exists, write a simple application to implement the functionality.


"use strict";
let string = "God knows they're squinters. I need a fake passport, preferably to France…I like the way they think. I hate the Wetlands. They're stupid and wet, and there are bugs everywhere, and I think I maced a crane. Turns out he ended up getting too friendly with the teddy bear. You're losing blood, aren't you? Probably, my socks are wet. If I make this comeback, I'll buy you a hundred George Michaels that you can teach to drive! Ann, you need to decide whether you want a man or a boy. I know how I'd answer. She keeps saying that God is going to show me a sign. The… something of my ways. Wisdom? It's probably wisdom. Got a big ass room at the travelodge. What a fun, sexy time for you. Obviously this blue part here is the land. A trick is something a whore does for money… or cocaine. I believe you will find the dessert to be both engrossing and high-grossing! So we don't get dessert? Did Ted make an appointment? No. Well, then Ted can GET THE HELL OUT OF THIS OFFICE! YOU GET THE HELL OUT! Douche chill! They want to break his legs. It's a good thing he's already got that little scooter. Yeah, like anyone would want to R her. You might wanna lean away from that fire since you're soaked in alcohol. Uncle Gob, was Aunt Lindsay ever pregnant? Yeah, sure, dozens of times. I hear the jury's still out on science. Steve Holt? The moron jock? I was hoping he would be gifted sexually.";

describe("The specification for word counting", function() {

  it("should have a checkWordCount function", function() {
    expect(checkWordCount).toBeDefined();
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