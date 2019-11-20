'use strict';

var $$String = require("bs-platform/lib/js/string.js");

function make(id, name) {
  return /* record */[
          /* id */id,
          /* name */$$String.trim($$String.capitalize_ascii(name))
        ];
}

function id(t) {
  return t[/* id */0];
}

function name(t) {
  return t[/* name */1];
}

exports.make = make;
exports.id = id;
exports.name = name;
/* No side effect */
