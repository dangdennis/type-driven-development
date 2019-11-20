'use strict';

var Pervasives = require("bs-platform/lib/js/pervasives.js");

var y = 2;

var z = 1 + y | 0;

Pervasives.print_int(z);

var x = 1;

exports.x = x;
exports.y = y;
exports.z = z;
/*  Not a pure module */
