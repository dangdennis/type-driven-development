'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function appToString(app) {
  return app[/* name */0] + (" (" + (app[/* url */1] + ")"));
}

function apps(company) {
  if (typeof company === "number") {
    throw [
          Caml_builtin_exceptions.match_failure,
          /* tuple */[
            "Ch10_PlatformCompany_V7.re",
            65,
            52
          ]
        ];
  }
  var variant = company[0];
  if (variant !== -480901274) {
    if (variant !== 377370585) {
      throw [
            Caml_builtin_exceptions.match_failure,
            /* tuple */[
              "Ch10_PlatformCompany_V7.re",
              65,
              52
            ]
          ];
    }
    switch (company[1]) {
      case "business" :
          return /* :: */[
                  appToString(/* record */[
                        /* name */"google ads",
                        /* url */"https://ads.google.com"
                      ]),
                  /* [] */0
                ];
      case "social" :
          return /* :: */[
                  appToString(/* record */[
                        /* name */"google+",
                        /* url */"https://plus.google.com"
                      ]),
                  /* [] */0
                ];
      default:
        throw [
              Caml_builtin_exceptions.match_failure,
              /* tuple */[
                "Ch10_PlatformCompany_V7.re",
                72,
                24
              ]
            ];
    }
  } else {
    switch (company[1]) {
      case "business" :
          return /* :: */[
                  appToString(/* record */[
                        /* name */"facebook ads",
                        /* url */"https://www.facebook.com/business"
                      ]),
                  /* [] */0
                ];
      case "social" :
          return /* :: */[
                  appToString(/* record */[
                        /* name */"facebook",
                        /* url */"https://facebook.com"
                      ]),
                  /* :: */[
                    appToString(/* record */[
                          /* name */"messenger",
                          /* url */"https://www.facebook.com/messenger"
                        ]),
                    /* :: */[
                      appToString(/* record */[
                            /* name */"instagram",
                            /* url */"https://www.instagram.com"
                          ]),
                      /* [] */0
                    ]
                  ]
                ];
      default:
        throw [
              Caml_builtin_exceptions.match_failure,
              /* tuple */[
                "Ch10_PlatformCompany_V7.re",
                67,
                26
              ]
            ];
    }
  }
}

console.log("Facebook");

Pervasives.print_string("Business: ");

console.log($$Array.of_list(apps(/* `Facebook */[
              -480901274,
              "business"
            ])));

Pervasives.print_string("Social: ");

console.log($$Array.of_list(apps(/* `Facebook */[
              -480901274,
              "social"
            ])));

Pervasives.print_newline(/* () */0);

console.log("Google");

Pervasives.print_string("Business: ");

console.log($$Array.of_list(apps(/* `Google */[
              377370585,
              "business"
            ])));

Pervasives.print_string("Social: ");

console.log($$Array.of_list(apps(/* `Google */[
              377370585,
              "social"
            ])));

exports.appToString = appToString;
/*  Not a pure module */
