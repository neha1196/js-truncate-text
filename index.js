"use strict";

module.exports = function (input, length) {

    var output = "",
        lastWord = "",
        inputLength = 0,
        inputArray = input.split(" ");
    /* Split the input string on " " delimeter and
         add each splitted word into an array */

    if (inputArray.length <= 1) { // Check of the length of the array
        return input;
    }

    lastWord = inputArray[inputArray.length - 1];
    inputLength = input.length - lastWord.length;
    /* If the array contains more than 1 element, then find the last element and
       calculate the new inputlength excluding the last word(element) */

    if (length === undefined) {
        length = 10;
    } // Set the default truncation limit to 10 if not defined in the input

    if (length >= (inputLength + 1)) {
        return input;
    }
    /* Return input as it is if the truncation limit exceeds or is equal to
    the inputlength */

    output = String(input)
        .substring(0, length) // Returns the substring of the input till specified length
        .concat("... ") // Concats ... with the truncated text.
        .concat(lastWord); // Appends the last word to the above text.
    return output;

};
