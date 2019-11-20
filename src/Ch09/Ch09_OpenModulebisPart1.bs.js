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

exports.ColorExample = ColorExample;
/* No side effect */
