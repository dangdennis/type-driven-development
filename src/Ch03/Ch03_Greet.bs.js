'use strict';


function greet(person) {
  return "Hello, " + (person[/* name */1] + (" with ID " + (String(person[/* id */0]) + "!")));
}

exports.greet = greet;
/* No side effect */
