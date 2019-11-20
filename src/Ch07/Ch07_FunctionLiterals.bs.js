'use strict';


function addV1(int1, int2) {
  return int1 + int2 | 0;
}

function addV2(int1, int2) {
  return int1 + int2 | 0;
}

function addV3(int1, int2) {
  return int1 + int2 | 0;
}

function float_000($$float) {
  return $$float;
}

function float_001($$float) {
  return $$float;
}

var $$float = /* record */[
  float_000,
  float_001
];

function int_000(prim) {
  return prim;
}

function int_001(prim) {
  return prim | 0;
}

var $$int = /* record */[
  int_000,
  int_001
];

var FloatConverter = {
  $$float: $$float,
  $$int: $$int
};

function greet(param) {
  return "Hello, " + (String(param[/* name */1]) + (" with ID " + (String(param[/* id */0]) + "!")));
}

exports.addV1 = addV1;
exports.addV2 = addV2;
exports.addV3 = addV3;
exports.FloatConverter = FloatConverter;
exports.greet = greet;
/* No side effect */
