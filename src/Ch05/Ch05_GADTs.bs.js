// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';


function paymentMessage(paymentMethod) {
  if (paymentMethod) {
    return "Paid with PO#" + (String(paymentMethod[0]) + "");
  } else {
    return "Paid in cash";
  }
}

var paymentCash = /* Cash */0;

exports.paymentCash = paymentCash;
exports.paymentMessage = paymentMessage;
/* No side effect */
