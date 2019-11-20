'use strict';

var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function apps(company) {
  var variant = company[0];
  if (variant !== -73732525) {
    if (variant >= 377370585) {
      if (variant >= 947509274) {
        switch (company[1]) {
          case "business" :
              return "uber";
          case "social" :
              return "";
          default:
            throw [
                  Caml_builtin_exceptions.match_failure,
                  /* tuple */[
                    "Ch10_PlatformCompany_V3.re",
                    25,
                    20
                  ]
                ];
        }
      } else {
        switch (company[1]) {
          case "business" :
              return "google ads, google adsense, gmail for business";
          case "social" :
              return "google+, gmail";
          default:
            throw [
                  Caml_builtin_exceptions.match_failure,
                  /* tuple */[
                    "Ch10_PlatformCompany_V3.re",
                    13,
                    22
                  ]
                ];
        }
      }
    } else if (variant >= 5920100) {
      switch (company[1]) {
        case "business" :
            return "amazon, AWS";
        case "social" :
            return "";
        default:
          throw [
                Caml_builtin_exceptions.match_failure,
                /* tuple */[
                  "Ch10_PlatformCompany_V3.re",
                  21,
                  22
                ]
              ];
      }
    } else {
      switch (company[1]) {
        case "business" :
            return "facebook ads";
        case "social" :
            return "facebook, messenger, instagram";
        default:
          throw [
                Caml_builtin_exceptions.match_failure,
                /* tuple */[
                  "Ch10_PlatformCompany_V3.re",
                  9,
                  24
                ]
              ];
      }
    }
  } else {
    switch (company[1]) {
      case "business" :
          return "twitter ads";
      case "social" :
          return "twitter";
      default:
        throw [
              Caml_builtin_exceptions.match_failure,
              /* tuple */[
                "Ch10_PlatformCompany_V3.re",
                17,
                23
              ]
            ];
    }
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

console.log("");

console.log("google".toUpperCase());

console.log("Business: " + apps(/* `Google */[
          377370585,
          "business"
        ]));

console.log("Social: " + apps(/* `Google */[
          377370585,
          "social"
        ]));

console.log("");

console.log("uber".toUpperCase());

console.log("Business: " + apps(/* `Uber */[
          947509274,
          "business"
        ]));

exports.apps = apps;
/*  Not a pure module */
