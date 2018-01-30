module.exports = function(input, length) {
  var output = '',
    inputLength = input.length,
    inputCharacter = '',
    lastWord = '';
  if (length === undefined) {
    length = 10;
  }
  if (length >= inputLength) {
    return input;
  }
  for (i = (inputLength - 1); i >= 0; i--) {
    inputCharacter = input.charAt(i);
    if (inputCharacter === " ") {
      lastWord = String(input)
        .substring(i, (inputLength));
      break;
    }
  }
  output = String(input)
    .substring(0, length)
    .concat('...')
    .concat(lastWord);
  return output;
}
