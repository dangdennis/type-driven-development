'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");

function triple(x) {
  return /* tuple */[
          x,
          x,
          x
        ];
}

function wrap(x) {
  return /* `wrap */[
          -822134326,
          x
        ];
}

var class_tables = [
  0,
  0,
  0
];

function makeObj(x) {
  if (!class_tables[0]) {
    var $$class = CamlinternalOO.create_table(["x"]);
    var env = CamlinternalOO.new_variable($$class, "");
    var x$1 = CamlinternalOO.get_method_label($$class, "x");
    CamlinternalOO.set_method($$class, x$1, (function (self$1) {
            return self$1[env][0];
          }));
    var env_init = function (env$1) {
      var self = CamlinternalOO.create_object_opt(0, $$class);
      self[env] = env$1;
      return self;
    };
    CamlinternalOO.init_class($$class);
    class_tables[0] = env_init;
  }
  return Curry._1(class_tables[0], [x]);
}

function greet(x) {
  console.log("Hello, " + (String(x) + "!"));
  return /* () */0;
}

exports.triple = triple;
exports.wrap = wrap;
exports.makeObj = makeObj;
exports.greet = greet;
/* No side effect */
