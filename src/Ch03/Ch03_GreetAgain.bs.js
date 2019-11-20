'use strict';


function greetAgain(person) {
  return "Hello again, " + (person[/* name */1] + (" with ID " + (String(person[/* id */0]) + "!")));
}

exports.greetAgain = greetAgain;
/* No side effect */
