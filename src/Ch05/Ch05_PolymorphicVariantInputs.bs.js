'use strict';

var Ch05_PolymorphicVariantBasics$ReasonReactExamples = require("./Ch05_PolymorphicVariantBasics.bs.js");

function eventToString($$event) {
  var variant = $$event[0];
  if (variant !== -346222000) {
    if (variant >= -104560252) {
      if (variant >= 463068136) {
        return "`accel(" + (String($$event[1]) + ")");
      } else {
        return "`keypress(" + (String($$event[1]) + ")");
      }
    } else if (variant >= -324111621) {
      var match = $$event[1];
      return "`clickTap(" + (String(match[0]) + (", " + (String(match[1]) + ")")));
    } else {
      var match$1 = $$event[1];
      return "`pointerMove(" + (String(match$1[0]) + (", " + (String(match$1[1]) + (", " + (String(match$1[2]) + (", " + (String(match$1[3]) + ")")))))));
    }
  } else {
    return "`deviceShake(" + (String($$event[1]) + ")");
  }
}

var pressAString = eventToString(Ch05_PolymorphicVariantBasics$ReasonReactExamples.pressA);

var angleVal = Ch05_PolymorphicVariantBasics$ReasonReactExamples.angle[1];

exports.eventToString = eventToString;
exports.pressAString = pressAString;
exports.angleVal = angleVal;
/* pressAString Not a pure module */
