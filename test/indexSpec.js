var app = require("../index.js");

describe("Truncate", function() {
  var inputString = "This is truncate text";

  it("should split strings by spaces", function() {
    var splitInput = inputString.split(" ");
    expect(splitInput)
      .toEqual(['This', 'is', 'truncate', 'text']);
  });

  it("should find the length of string", function() {
    expect(inputString.length)
      .toEqual(21);
  });

  it("should set the defaut truncation limit if not specified", function() {
    expect(inputString.length)
      .toEqual(21);
  });

});
