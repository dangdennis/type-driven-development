'use strict';

var Ch04_RecordLiterals$ReasonReactExamples = require("../Ch04/Ch04_RecordLiterals.bs.js");

var people_001 = /* Cons */[
  Ch04_RecordLiterals$ReasonReactExamples.jim,
  /* Cons */[
    Ch04_RecordLiterals$ReasonReactExamples.tom,
    /* Empty */0
  ]
];

var people = /* Cons */[
  Ch04_RecordLiterals$ReasonReactExamples.bob,
  people_001
];

function greetOne(param) {
  console.log("Hello, " + (String(param[/* name */1]) + (" with ID " + (String(param[/* id */0]) + "!"))));
  return /* () */0;
}

function greetAll(_people) {
  while(true) {
    var people = _people;
    if (people) {
      greetOne(people[0]);
      _people = people[1];
      continue ;
    } else {
      return /* () */0;
    }
  };
}

exports.people = people;
exports.greetOne = greetOne;
exports.greetAll = greetAll;
/* No side effect */
