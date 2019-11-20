'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function appToString(app) {
  return app[/* name */0] + (" (" + (app[/* url */1] + ")"));
}

function newSignUp(app) {
  app[/* numberOfAccounts */2] = app[/* numberOfAccounts */2] + 1 | 0;
  return /* () */0;
}

var facebook = /* record */[
  /* name */"facebook",
  /* url */"https://facebook.com",
  /* numberOfAccounts */10000
];

var facebookads = /* record */[
  /* name */"facebook ads",
  /* url */"https://www.facebook.com/business",
  /* numberOfAccounts */10000
];

var messenger = /* record */[
  /* name */"messenger",
  /* url */"https://www.facebook.com/messenger",
  /* numberOfAccounts */10000
];

var instagram = /* record */[
  /* name */"instagram",
  /* url */"https://www.instagram.com",
  /* numberOfAccounts */10000
];

var googleads = /* record */[
  /* name */"google ads",
  /* url */"https://ads.google.com",
  /* numberOfAccounts */10000
];

var googleplus = /* record */[
  /* name */"google+",
  /* url */"https://plus.google.com",
  /* numberOfAccounts */10000
];

function apps(company) {
  if (typeof company === "number") {
    throw [
          Caml_builtin_exceptions.match_failure,
          /* tuple */[
            "Ch10_PlatformCompany_V8.re",
            79,
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
              "Ch10_PlatformCompany_V8.re",
              79,
              52
            ]
          ];
    }
    switch (company[1]) {
      case "business" :
          return /* :: */[
                  appToString(googleads),
                  /* [] */0
                ];
      case "social" :
          return /* :: */[
                  appToString(googleplus),
                  /* [] */0
                ];
      default:
        throw [
              Caml_builtin_exceptions.match_failure,
              /* tuple */[
                "Ch10_PlatformCompany_V8.re",
                86,
                24
              ]
            ];
    }
  } else {
    switch (company[1]) {
      case "business" :
          return /* :: */[
                  appToString(facebookads),
                  /* [] */0
                ];
      case "social" :
          return /* :: */[
                  appToString(facebook),
                  /* :: */[
                    appToString(messenger),
                    /* :: */[
                      appToString(instagram),
                      /* [] */0
                    ]
                  ]
                ];
      default:
        throw [
              Caml_builtin_exceptions.match_failure,
              /* tuple */[
                "Ch10_PlatformCompany_V8.re",
                81,
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

console.log("New sign-up on Instagram");

newSignUp(instagram);

console.log("New sign-up on Instagram");

newSignUp(instagram);

console.log(instagram[/* numberOfAccounts */2]);

exports.appToString = appToString;
exports.newSignUp = newSignUp;
/*  Not a pure module */
