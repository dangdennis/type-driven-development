'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Ch06_List$ReasonReactExamples = require("./Ch06_List.bs.js");
var Ch06_ReasonList$ReasonReactExamples = require("./Ch06_ReasonList.bs.js");

function tryFind(needle, _haystack) {
  while(true) {
    var haystack = _haystack;
    if (haystack) {
      var item = haystack[0];
      if (Curry._1(needle, item)) {
        return Caml_option.some(item);
      } else {
        _haystack = haystack[1];
        continue ;
      }
    } else {
      return ;
    }
  };
}

function optionallyGreet(person) {
  if (person !== undefined) {
    return Ch06_List$ReasonReactExamples.greetOne(person);
  } else {
    console.log("No such person!");
    return /* () */0;
  }
}

function idEq1(param) {
  return param[/* id */0] === 1;
}

function idEq4(param) {
  return param[/* id */0] === 4;
}

optionallyGreet(tryFind(idEq1, Ch06_ReasonList$ReasonReactExamples.people));

optionallyGreet(tryFind(idEq4, Ch06_ReasonList$ReasonReactExamples.people));

exports.tryFind = tryFind;
exports.optionallyGreet = optionallyGreet;
exports.idEq1 = idEq1;
exports.idEq4 = idEq4;
/*  Not a pure module */
