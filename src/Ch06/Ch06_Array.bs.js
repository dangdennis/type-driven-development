'use strict';

var Caml_array = require("bs-platform/lib/js/caml_array.js");

var empty = /* array */[];

var singleton = /* array */[1];

var multi = /* array */[
  false,
  true,
  true
];

Caml_array.caml_array_set(multi, 1, false);

console.log(Caml_array.caml_array_get(multi, 1));

exports.empty = empty;
exports.singleton = singleton;
exports.multi = multi;
/*  Not a pure module */
