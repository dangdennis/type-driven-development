'use strict';

var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function toString(app) {
  return app[/* name */0] + (" (" + (app[/* url */1] + ")"));
}

var WebApp = {
  toString: toString
};

var facebook = /* record */[
  /* name */"facebook",
  /* url */"https://facebook.com"
];

var facebookads = /* record */[
  /* name */"facebook ads",
  /* url */"https://www.facebook.com/business"
];

var messenger = /* record */[
  /* name */"messenger",
  /* url */"https://www.facebook.com/messenger"
];

var instagram = /* record */[
  /* name */"instagram",
  /* url */"https://www.instagram.com"
];

function apps(company) {
  if (typeof company === "number") {
    throw [
          Caml_builtin_exceptions.match_failure,
          /* tuple */[
            "Ch10_PlatformCompany_V5.re",
            38,
            38
          ]
        ];
  }
  if (company[0] !== -480901274) {
    throw [
          Caml_builtin_exceptions.match_failure,
          /* tuple */[
            "Ch10_PlatformCompany_V5.re",
            38,
            38
          ]
        ];
  }
  switch (company[1]) {
    case "business" :
        return toString(facebookads);
    case "social" :
        return toString(facebook) + (", " + (toString(messenger) + (", " + toString(instagram))));
    default:
      throw [
            Caml_builtin_exceptions.match_failure,
            /* tuple */[
              "Ch10_PlatformCompany_V5.re",
              40,
              26
            ]
          ];
  }
}

var Platform = {
  apps: apps
};

console.log("facebook".toUpperCase());

console.log("Business: " + apps(/* `Facebook */[
          -480901274,
          "business"
        ]));

console.log("Social: " + apps(/* `Facebook */[
          -480901274,
          "social"
        ]));

exports.WebApp = WebApp;
exports.facebook = facebook;
exports.facebookads = facebookads;
exports.messenger = messenger;
exports.instagram = instagram;
exports.Platform = Platform;
/*  Not a pure module */
