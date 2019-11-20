'use strict';

var Ch09_OpenModulebisPart1$ReasonReactExamples = require("./Ch09_OpenModulebisPart1.bs.js");

console.log(Ch09_OpenModulebisPart1$ReasonReactExamples.ColorExample.stringOfColor(Ch09_OpenModulebisPart1$ReasonReactExamples.ColorExample.onegreen));

console.log(Ch09_OpenModulebisPart1$ReasonReactExamples.ColorExample.stringOfRgb(Ch09_OpenModulebisPart1$ReasonReactExamples.ColorExample.othergreen));

console.log("String value of another color: " + Ch09_OpenModulebisPart1$ReasonReactExamples.ColorExample.stringOfColor(/* Blue */737308346));

var colorString = /* () */0;

exports.colorString = colorString;
/*  Not a pure module */
