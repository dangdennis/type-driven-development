'use strict';

var $$String = require("bs-platform/lib/js/string.js");

function getAcmeOrder(paymentMethod) {
  if (paymentMethod) {
    var poNumber = paymentMethod[0];
    if ($$String.sub(poNumber, 0, 4) === "ACME") {
      return poNumber;
    } else {
      return ;
    }
  }
  
}

function decidePaymentMethod(orderTotal, orderId) {
  if (orderTotal <= 50.0) {
    return /* Cash */0;
  } else {
    return /* PurchaseOrder */["PO-" + orderId];
  }
}

exports.getAcmeOrder = getAcmeOrder;
exports.decidePaymentMethod = decidePaymentMethod;
/* No side effect */
