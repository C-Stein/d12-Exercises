"use strict";
console.log("Javascript!");

// A base Robot function.
// Define three robot type functions (e.g. Drone, Bipedal, ATV).
// Define at least 2 specific robot model functions for each type.
// Give each robot model a different range of health. For example, one model can have health range of 50-80, and another one will have a range of 60-120. To accomplish this, read about the Math.random() function in JavaScript.
// Define at least six different modifications and six different weapons that can be added to a robot.
// Each modification should provide some combination of the following benefits - increased protection, increased damage, or evasion capability (ability to avoid some attacks).
// Define the range of damage that each weapon can do.

function Robot() {
  this.modification1 = true;
  this.modification2 = true;
  this.modification3 = true;
  this.modification4 = true;
  this.modification5 = true;
  this.modification6 = true;
  this.weapon1 = true;
  this.weapon2 = true;
  this.weapon3 = true;
  this.weapon4 = true;
  this.weapon5 = true;
  this.weapon6 = true;
}

function Drone() {
  this.delivery = true;
  this.camera = true;
  this.health = 50 - 80; //(use Math.random());
}

Drone.prototype = new Robot();

let Bipedal = new Robot();
let ATV = new Robot();

let player1RobotType;
let player1Weapon;
let player1Modification;
let player2RobotType;
let player2Weapon;
let player2Modification;
let player2 = false;

function selectRobotType(e) {
  $(".robotType").removeClass("selected");
  e.toggleClass("selected");
  console.log("robotType", e.text());
  $("#weapons").removeClass("hidden");
  $(".weapon").removeClass("selected");
  return e.text();
}

function selectWeapon(e) {
  $(".weapon").removeClass("selected");
  e.toggleClass("selected");
  console.log("weapon", e.text());
  $("#modifications").removeClass("hidden");
  $(".modification").removeClass("selected");
  return e.text();
}

function selectModification(e, playerModification) {
    $(".modification").removeClass("selected");
  e.toggleClass("selected");
  console.log("modification", e.text());
  return e.text();
}

$(".robotType").click(function() {
  let e = $(this);
  if(player2 == false) {
    player1RobotType = selectRobotType(e)
  } else {
    player2RobotType = selectRobotType(e)
  }
});

$(".weapon").click(function() {
  let e = $(this);
  if(player2 == false) {
    player1Weapon = selectWeapon(e)
  } else {
    player2Weapon = selectWeapon(e)
  }
})

$(".modification").click(function() {
  let e = $(this);
  if(player2 == false) {
    player1Modification = selectModification(e)
    $("#confirmPlayerOne").removeClass("hidden");
  } else {
    player2Modification = selectModification(e)
    $("#confirmPlayerTwo").removeClass("hidden");
  }
})

//little extra: add a "name your robot" field

$("#confirmPlayerOne").click(function() {
  $("#robotTypes, #weapons, #modifications, #confirmPlayerOne").addClass("hidden");
  $("#player1specs")
  .text("Player One selected a " + player1RobotType + " with " + player1Modification + " and a " + player1Weapon + ".");
  $("#player2specs").removeClass("hidden");
  player2 = true;
  $("#robotTypes").removeClass("hidden");
  $(".robotType").removeClass("selected");
})

$("#confirmPlayerTwo").click(function() {
  $("#robotTypes, #weapons, #modifications, #confirmPlayerTwo").addClass("hidden");
  $("#player2specs")
  .text("Player Two selected a " + player2RobotType + " with " + player2Modification + " and a " + player2Weapon + ".");
})

















