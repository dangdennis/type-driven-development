'use strict';

var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function makeExn(string) {
  if (string === "") {
    throw [
          Caml_builtin_exceptions.assert_failure,
          /* tuple */[
            "Ch07_DomainTypes.re",
            6,
            26
          ]
        ];
  }
  return string;
}

var NonEmptyString = {
  makeExn: makeExn
};

function makeExn$1($$float) {
  if ($$float <= 0) {
    throw [
          Caml_builtin_exceptions.assert_failure,
          /* tuple */[
            "Ch07_DomainTypes.re",
            14,
            25
          ]
        ];
  }
  return $$float;
}

var PositiveFloat = {
  makeExn: makeExn$1
};

function sendMoney(from, to_, amount) {
  console.log("Send \$" + (String(amount) + (" from " + (String(from) + (" to " + (String(to_) + ""))))));
  return /* () */0;
}

sendMoney(makeExn("Alice"), makeExn("Bob"), makeExn$1(32));

exports.NonEmptyString = NonEmptyString;
exports.PositiveFloat = PositiveFloat;
exports.sendMoney = sendMoney;
/*  Not a pure module */
