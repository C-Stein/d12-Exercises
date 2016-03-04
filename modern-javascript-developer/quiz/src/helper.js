"use strict";

let $ = require("../lib/node_modules/jQuery/dist/jquery.min.js");

function randomRange(a, b) {
  return Math.round(Math.random() * (b - a) + a);
}

function evasion(chance)  {
  if (Math.random() < chance) {
    return true;
  } else {
    return false;
  }
}

function coinToss() {
  if (Math.random() > 0.5) {
    $("#output").append("Player One won the coin toss");
    return 1;
  } else {
    $("#output").append("Player Two won the coin toss");
    return 2;
  }
}

let helper = {
  randomRange, evasion, coinToss
}

module.exports = helper;