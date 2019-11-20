'use strict';


function stringOfColor(c) {
  if (c !== 4100401) {
    if (c >= 737308346) {
      if (c >= 756711075) {
        return "green";
      } else {
        return "blue";
      }
    } else if (c >= 82908052) {
      return "yellow";
    } else {
      return "orange";
    }
  } else {
    return "red";
  }
}

function stringOfRgb(c) {
  if (c !== 737308346) {
    if (c >= 756711075) {
      return "RGB green";
    } else {
      return "RGB red";
    }
  } else {
    return "RGB blue";
  }
}

var ColorExample = {
  onegreen: /* Green */756711075,
  othergreen: /* Green */756711075,
  stringOfColor: stringOfColor,
  stringOfRgb: stringOfRgb
};

console.log("1/ Use function and values inside the module...");

console.log(stringOfColor(/* Green */756711075));

console.log(stringOfRgb(/* Green */756711075));

console.log("2/ Use function and values from the module after opening it...");

console.log("String value of another color: " + stringOfColor(/* Blue */737308346));

var colorString = /* () */0;

exports.ColorExample = ColorExample;
exports.colorString = colorString;
/*  Not a pure module */
