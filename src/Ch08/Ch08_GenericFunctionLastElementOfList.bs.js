'use strict';

var Caml_option = require("bs-platform/lib/js/caml_option.js");

function lastElem(_aList) {
  while(true) {
    var aList = _aList;
    if (aList) {
      var l = aList[1];
      if (l) {
        _aList = l;
        continue ;
      } else {
        return Caml_option.some(aList[0]);
      }
    } else {
      return ;
    }
  };
}

console.log(lastElem(/* :: */[
          1,
          /* :: */[
            3,
            /* :: */[
              2,
              /* :: */[
                5,
                /* :: */[
                  4,
                  /* [] */0
                ]
              ]
            ]
          ]
        ]));

console.log(lastElem(/* :: */[
          "a",
          /* :: */[
            "b",
            /* :: */[
              "c",
              /* :: */[
                "d",
                /* [] */0
              ]
            ]
          ]
        ]));

exports.lastElem = lastElem;
/*  Not a pure module */
