'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");

var shared = [
  "name",
  "id"
];

var $$class = CamlinternalOO.create_table(shared);

var ids = CamlinternalOO.get_method_labels($$class, shared);

var name = ids[0];

var id = ids[1];

CamlinternalOO.set_methods($$class, /* array */[
      id,
      (function (self$1) {
          return 1;
        }),
      name,
      (function (self$1) {
          return "Bob";
        })
    ]);

CamlinternalOO.init_class($$class);

var bob = CamlinternalOO.create_object_opt(0, $$class);

function greet(person) {
  return "Hello, " + (Caml_oo_curry.js1(-922783157, 1, person) + (" with ID " + String(Caml_oo_curry.js1(23515, 2, person))));
}

var $$class$1 = CamlinternalOO.create_table([
      "name",
      "sayHi",
      "id"
    ]);

var ids$1 = CamlinternalOO.get_method_labels($$class$1, [
      "sayHi",
      "name",
      "id"
    ]);

var sayHi = ids$1[0];

var name$1 = ids$1[1];

var id$1 = ids$1[2];

CamlinternalOO.set_methods($$class$1, /* array */[
      id$1,
      (function (self$2) {
          return 2;
        }),
      name$1,
      (function (self$2) {
          return "Jim";
        }),
      sayHi,
      (function (self$2) {
          return "Hi, my name is " + Curry._1(self$2[0][name$1], self$2);
        })
    ]);

CamlinternalOO.init_class($$class$1);

var jim = CamlinternalOO.create_object_opt(0, $$class$1);

console.log(greet(jim));

exports.bob = bob;
exports.greet = greet;
exports.jim = jim;
/* class Not a pure module */
