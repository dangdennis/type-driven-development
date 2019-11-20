'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function apps(company) {
  switch (company.tag | 0) {
    case /* Facebook */0 :
        switch (company[0]) {
          case "business" :
              return "facebook ads";
          case "social" :
              return "facebook, messenger, instagram";
          default:
            throw [
                  Caml_builtin_exceptions.match_failure,
                  /* tuple */[
                    "Ch10_PlatformCompany_V2.re",
                    11,
                    23
                  ]
                ];
        }
    case /* Google */1 :
        switch (company[0]) {
          case "business" :
              return "google ads, google adsense, gmail for business";
          case "social" :
              return "google+, gmail";
          default:
            throw [
                  Caml_builtin_exceptions.match_failure,
                  /* tuple */[
                    "Ch10_PlatformCompany_V2.re",
                    15,
                    21
                  ]
                ];
        }
    case /* Twitter */2 :
        switch (company[0]) {
          case "business" :
              return "twitter ads";
          case "social" :
              return "twitter";
          default:
            throw [
                  Caml_builtin_exceptions.match_failure,
                  /* tuple */[
                    "Ch10_PlatformCompany_V2.re",
                    19,
                    22
                  ]
                ];
        }
    
  }
}

console.log("facebook".toUpperCase());

console.log("Business: " + apps(/* Facebook */Block.__(0, ["business"])));

console.log("Social: " + apps(/* Facebook */Block.__(0, ["social"])));

console.log("google".toUpperCase());

console.log("Business: " + apps(/* Google */Block.__(1, ["business"])));

console.log("Social: " + apps(/* Google */Block.__(1, ["social"])));

exports.apps = apps;
/*  Not a pure module */
