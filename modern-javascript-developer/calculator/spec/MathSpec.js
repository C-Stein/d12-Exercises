
// Write unit tests to check for the existence of the following functions:
// add()
// subtract()
// multiply()
// divide()
// square()
// squareRoot()
// Write unit tests that will verify the expected output of each of those functions.

describe("The specification for basic math", function() {

  it("should have an add function", function() {
    expect(add).toBeDefined();
  });

  it("should add two integers", function() {
    expect(add(2, 5)).toBe(7);
  });

  it("should have a subtract function", function() {
    expect(subtract).toBeDefined();
  });

  it("should subtract two integers", function() {
    expect(subtract(7, 5)).toBe(2);
  });

  it("should not return a negative value for subtraction", function() {
    expect(absolute(subtract, 5, 7)).not.toBe(-2);
  })

  it("should have a multiply function", function() {
    expect(multiply).toBeDefined();
  });

  it("should multiply two integers", function() {
    expect(multiply(2, 5)).toBe(10);
  })

  it("should have a divide function", function() {
    expect(divide).toBeDefined();
  });

  it("should divide two integers", function() {
    expect(divide(8, 2)).toBe(4);
  });

  it("should have a square function", function() {
    expect(square).toBeDefined();
  });

  it("should find the square of an integer", function() {
    expect(square(5)).toBe(25);
  })

  it("should have a squareRoot function", function() {
    expect(squareRoot).toBeDefined();
  });

  it("should find the square root of an integer", function () {
    expect(squareRoot(9)).toBe(3);
  })

});





