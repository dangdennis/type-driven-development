'use strict';


console.log(/* Moccasins */265261402);

console.log(/* Slingbacks */106377731);

function infoAboutShoe(s) {
  if (s >= -326854350) {
    if (s >= 265261402) {
      if (s >= 351714595) {
        return "Wingtips";
      } else {
        return "Moccasins";
      }
    } else if (s >= 106377731) {
      return "Slingbacks - Specific woman shoe";
    } else {
      return "Sneakers";
    }
  } else if (s >= -775948179) {
    return "High Heels - Specific woman shoe";
  } else {
    return "Boots";
  }
}

console.log(infoAboutShoe(/* Moccasins */265261402));

console.log(infoAboutShoe(/* Slingbacks */106377731));

var johndoe_shoe = /* Moccasins */265261402;

var janedoe_shoe = /* Slingbacks */106377731;

exports.johndoe_shoe = johndoe_shoe;
exports.janedoe_shoe = janedoe_shoe;
exports.infoAboutShoe = infoAboutShoe;
/*  Not a pure module */
