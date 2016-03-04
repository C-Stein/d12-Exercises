"use strict";

let $ = require("../lib/node_modules/jQuery/dist/jquery.min.js");

function RobotType(e) {
  $(".robotType").removeClass("selected");
  e.toggleClass("selected");
  console.log("robotType", e.text());
  $("#weapons").removeClass("hidden");
  $(".weapon").removeClass("selected");
  return e.text();
}

function Weapon(e) {
  $(".weapon").removeClass("selected");
  e.toggleClass("selected");
  console.log("weapon", e.text());
  $("#modifications").removeClass("hidden");
  $(".modification").removeClass("selected");
  return e.text();
}

function Modification(e, playerModification) {
    $(".modification").removeClass("selected");
  e.toggleClass("selected");
  console.log("modification", e.text());
  return e.text();
}

let select = {
  RobotType, Weapon, Modification
}

module.exports = select;