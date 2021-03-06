'use strict';

var $$Set = require("bs-platform/lib/js/set.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");

var compare = Caml_obj.caml_compare;

var IntSet = $$Set.Make({
      compare: compare
    });

var myIntSet = Curry._1(IntSet.of_list, /* :: */[
      1,
      /* :: */[
        2,
        /* :: */[
          3,
          /* [] */0
        ]
      ]
    ]);

console.log(myIntSet);

exports.IntSet = IntSet;
exports.myIntSet = myIntSet;
/* IntSet Not a pure module */
