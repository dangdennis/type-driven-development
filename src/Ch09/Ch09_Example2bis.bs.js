'use strict';


console.log(/* Moccasins */265261402);

console.log(/* Slingbacks */106377731);

function infoAboutShoe(s) {
  if (s !== -326854350) {
    if (s >= 265261402) {
      if (s >= 351714595) {
        return "Wingtips";
      } else {
        return "Moccasins";
      }
    } else if (s >= -903505950) {
      return "Woman shoe such as Slingbacks or High Heels";
    } else {
      return "Boots";
    }
  } else {
    return "Sneakers";
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
