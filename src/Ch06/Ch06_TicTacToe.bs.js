'use strict';

var Caml_array = require("bs-platform/lib/js/caml_array.js");

function newBoard(param) {
  return Caml_array.caml_make_vect(9, /* Empty */2);
}

function play(player, coord, board) {
  return Caml_array.caml_array_set(board, coord - 1 | 0, player);
}

function xWon(board) {
  if (board.length !== 9) {
    return false;
  } else {
    var match = board[0];
    var exit = 0;
    if (match !== 0) {
      exit = 1;
    } else {
      var match$1 = board[1];
      var exit$1 = 0;
      if (match$1 !== 0) {
        exit$1 = 2;
      } else {
        var match$2 = board[2];
        if (match$2 !== 0) {
          exit$1 = 2;
        } else {
          return true;
        }
      }
      if (exit$1 === 2) {
        var match$3 = board[3];
        var exit$2 = 0;
        if (match$3 !== 0) {
          exit$2 = 3;
        } else {
          var match$4 = board[6];
          if (match$4 !== 0) {
            exit$2 = 3;
          } else {
            return true;
          }
        }
        if (exit$2 === 3) {
          var match$5 = board[4];
          if (match$5 !== 0) {
            exit = 1;
          } else {
            var match$6 = board[8];
            if (match$6 !== 0) {
              exit = 1;
            } else {
              return true;
            }
          }
        }
        
      }
      
    }
    if (exit === 1) {
      var match$7 = board[1];
      var match$8 = board[2];
      var exit$3 = 0;
      var match$9 = board[3];
      var exit$4 = 0;
      if (match$9 !== 0) {
        exit$4 = 4;
      } else {
        var match$10 = board[4];
        if (match$10 !== 0) {
          exit$4 = 4;
        } else {
          var match$11 = board[5];
          if (match$11 !== 0) {
            exit$4 = 4;
          } else {
            return true;
          }
        }
      }
      if (exit$4 === 4) {
        var match$12 = board[6];
        if (match$12 !== 0) {
          exit$3 = 3;
        } else {
          var match$13 = board[7];
          if (match$13 !== 0) {
            exit$3 = 3;
          } else {
            var match$14 = board[8];
            if (match$14 !== 0) {
              exit$3 = 3;
            } else {
              return true;
            }
          }
        }
      }
      if (exit$3 === 3 && match$8 === 0) {
        var match$15 = board[4];
        var exit$5 = 0;
        var match$16 = board[5];
        if (match$16 !== 0) {
          exit$5 = 4;
        } else {
          var match$17 = board[8];
          if (match$17 !== 0) {
            exit$5 = 4;
          } else {
            return true;
          }
        }
        if (exit$5 === 4) {
          if (match$15 !== 0) {
            return false;
          } else {
            var match$18 = board[6];
            if (match$18 === 0) {
              return true;
            }
            
          }
        }
        
      }
      if (match$7 !== 0) {
        return false;
      } else {
        var match$19 = board[4];
        if (match$19 !== 0) {
          return false;
        } else {
          var match$20 = board[7];
          return match$20 === 0;
        }
      }
    }
    
  }
}

exports.newBoard = newBoard;
exports.play = play;
exports.xWon = xWon;
/* No side effect */
