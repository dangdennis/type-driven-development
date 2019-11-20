'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");

function printEnveloppeLabel(firstname, lastname, address, country) {
  Pervasives.print_newline(/* () */0);
  console.log(firstname + (" " + lastname));
  console.log(address);
  console.log(country);
  return /* () */0;
}

printEnveloppeLabel("John", "Doe", "Some address in the US", "USA");

function printEnveloppeLabelUS(param) {
  return (function (param$1) {
      return (function (param$2) {
          var param$3 = param$2;
          var param$4 = "USA";
          var param$5 = param$1;
          var param$6 = param$3;
          var param$7 = param$4;
          return printEnveloppeLabel(param, param$5, param$6, param$7);
        });
    });
}

Curry._1(printEnveloppeLabelUS("John")("Doe"), "Some address in the US");

function printEnveloppeLabelDoeFamily(param) {
  return Curry._1(printEnveloppeLabelUS(param)("Doe"), "Some address in the US");
}

Curry._1(printEnveloppeLabelUS("Jane")("Doe"), "Some address in the US");

exports.printEnveloppeLabel = printEnveloppeLabel;
exports.printEnveloppeLabelUS = printEnveloppeLabelUS;
exports.printEnveloppeLabelDoeFamily = printEnveloppeLabelDoeFamily;
/*  Not a pure module */
