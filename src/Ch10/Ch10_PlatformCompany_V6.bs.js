'use strict';

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
            "Ch10_PlatformCompany_V6.re",
            65,
            46
          ]
        ];
  }
  var variant = company[0];
  if (variant !== -480901274) {
    if (variant !== 377370585) {
      throw [
            Caml_builtin_exceptions.match_failure,
            /* tuple */[
              "Ch10_PlatformCompany_V6.re",
              65,
              46
            ]
          ];
    }
    switch (company[1]) {
      case "business" :
          return appToString(/* record */[
                      /* name */"google ads",
                      /* url */"https://ads.google.com"
                    ]);
      case "social" :
          return appToString(/* record */[
                      /* name */"google+",
                      /* url */"https://plus.google.com"
                    ]);
      default:
        throw [
              Caml_builtin_exceptions.match_failure,
              /* tuple */[
                "Ch10_PlatformCompany_V6.re",
                72,
                24
              ]
            ];
    }
  } else {
    switch (company[1]) {
      case "business" :
          return appToString(/* record */[
                      /* name */"facebook ads",
                      /* url */"https://www.facebook.com/business"
                    ]);
      case "social" :
          return appToString(/* record */[
                      /* name */"facebook",
                      /* url */"https://facebook.com"
                    ]) + (", " + (appToString(/* record */[
                          /* name */"messenger",
                          /* url */"https://www.facebook.com/messenger"
                        ]) + (", " + appToString(/* record */[
                            /* name */"instagram",
                            /* url */"https://www.instagram.com"
                          ]))));
      default:
        throw [
              Caml_builtin_exceptions.match_failure,
              /* tuple */[
                "Ch10_PlatformCompany_V6.re",
                67,
                26
              ]
            ];
    }
  }
}

console.log("Facebook");

console.log("Business: " + apps(/* `Facebook */[
          -480901274,
          "business"
        ]));

console.log("Social: " + apps(/* `Facebook */[
          -480901274,
          "social"
        ]));

Pervasives.print_newline(/* () */0);

console.log("Google");

console.log("Business: " + apps(/* `Google */[
          377370585,
          "business"
        ]));

console.log("Social: " + apps(/* `Google */[
          377370585,
          "social"
        ]));

exports.appToString = appToString;
/*  Not a pure module */
