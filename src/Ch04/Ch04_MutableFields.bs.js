'use strict';


function summarise(array) {
  var result = /* record */[
    /* sum */0,
    /* count */array.length,
    /* mean */0
  ];
  for(var i = 0 ,i_finish = result[/* count */1] - 1 | 0; i <= i_finish; ++i){
    result[0] += array[i];
  }
  result[/* mean */2] = result[/* sum */0] / result[/* count */1];
  return result;
}

exports.summarise = summarise;
/* No side effect */
