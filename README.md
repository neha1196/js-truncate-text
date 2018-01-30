
# **js-truncate-text**

js-truncate-text is a npm package which can be used to truncate the input text
to a specified length if mentioned in the input or to default length of 10
characters if the length is not specified, followed by **...**
and **last complete word**.

### Why to use js-truncate-text?

  1. It assures security against database injections when used to
  truncate text in urls.

  2. Cut long paragraphs short using js-truncate-text without losing the ending.


 **Install js-truncate-text using the following command:**

`$ npm install js-truncate-text`


### Example

Here is an example to use js-truncate-text.

`var truncate = require('js-truncate-text')`

`truncate('This is truncate' , 3);`

gives output as : Thi...truncate
