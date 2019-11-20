'use strict';


function stringToColour(string) {
  switch (string) {
    case "blue" :
        return /* blue */-1055309158;
    case "green" :
        return /* green */434966211;
    case "red" :
        return /* red */5691729;
    default:
      return /* unknown */-512023670;
  }
}

exports.stringToColour = stringToColour;
/* No side effect */
