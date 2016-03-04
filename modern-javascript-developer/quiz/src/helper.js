"use strict";

function randomRange(a, b) {
  return Math.round(Math.random() * (b - a) + a);
}

let helper = {
  randomRange
}

module.exports = helper;