'use strict';

var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function apps(company) {
  if (typeof company === "number") {
    throw [
          Caml_builtin_exceptions.match_failure,
          /* tuple */[
            "Ch10_PlatformCompany_V4.re",
            30,
            50
          ]
        ];
  }
  if (company[0] !== -480901274) {
    throw [
          Caml_builtin_exceptions.match_failure,
          /* tuple */[
            "Ch10_PlatformCompany_V4.re",
            30,
            50
          ]
        ];
  }
  switch (company[1]) {
    case "business" :
        return "facebook ads";
    case "social" :
        return "facebook, messenger, instagram";
    default:
      throw [
            Caml_builtin_exceptions.match_failure,
            /* tuple */[
              "Ch10_PlatformCompany_V4.re",
              32,
              24
            ]
          ];
  }
}

console.log("facebook".toUpperCase());

console.log("Business: " + apps(/* `Facebook */[
          -480901274,
          "business"
        ]));

console.log("Social: " + apps(/* `Facebook */[
          -480901274,
          "social"
        ]));

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
  /* url */"https://www.instagram.com/"
];

exports.facebook = facebook;
exports.facebookads = facebookads;
exports.messenger = messenger;
exports.instagram = instagram;
exports.apps = apps;
/*  Not a pure module */
