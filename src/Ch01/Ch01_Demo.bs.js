'use strict';


function makePerson(id, name) {
  return /* record */[
          /* id */id,
          /* name */name
        ];
}

exports.makePerson = makePerson;
/* No side effect */
