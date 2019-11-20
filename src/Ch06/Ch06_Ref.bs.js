'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

function tryFind(needle, haystack) {
  var currHaystack = haystack;
  var stop = false;
  var currItem = undefined;
  while(!stop) {
    var match = currHaystack;
    if (match) {
      var item = match[0];
      if (Curry._1(needle, item)) {
        stop = true;
        currItem = Caml_option.some(item);
      } else {
        currHaystack = match[1];
      }
    } else {
      stop = true;
    }
  };
  return currItem;
}

exports.tryFind = tryFind;
/* No side effect */
