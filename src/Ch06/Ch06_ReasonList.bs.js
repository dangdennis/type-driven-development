'use strict';

var Ch06_List$ReasonReactExamples = require("./Ch06_List.bs.js");
var Ch04_RecordLiterals$ReasonReactExamples = require("../Ch04/Ch04_RecordLiterals.bs.js");

var people_001 = /* :: */[
  Ch04_RecordLiterals$ReasonReactExamples.jim,
  /* :: */[
    Ch04_RecordLiterals$ReasonReactExamples.tom,
    /* [] */0
  ]
];

var people = /* :: */[
  Ch04_RecordLiterals$ReasonReactExamples.bob,
  people_001
];

function greetAll(_people) {
  while(true) {
    var people = _people;
    if (people) {
      Ch06_List$ReasonReactExamples.greetOne(people[0]);
      _people = people[1];
      continue ;
    } else {
      return /* () */0;
    }
  };
}

exports.people = people;
exports.greetAll = greetAll;
/* No side effect */
