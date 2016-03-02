"use strict";

let player1Robot;
let player2Robot;
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
  if(player2 === false) {
    player1RobotType = selectRobotType(e);
  } else {
    player2RobotType = selectRobotType(e);
  }
});

$(".weapon").click(function() {
  let e = $(this);
  if(player2 === false) {
    player1Weapon = selectWeapon(e);
  } else {
    player2Weapon = selectWeapon(e);
  }
});

$(".modification").click(function() {
  let e = $(this);
  if(player2 === false) {
    player1Modification = selectModification(e);
    $("#confirmPlayerOne").removeClass("hidden");
  } else {
    player2Modification = selectModification(e);
    $("#confirmPlayerTwo").removeClass("hidden");
  }
});

//little extra: add a "name your robot" field

$("#confirmPlayerOne").click(function() {
  $("#robotTypes, #weapons, #modifications, #confirmPlayerOne").addClass("hidden");
  $("#player1specs")
  .text("Player One selected a " + player1RobotType + " with " + player1Modification + " and a " + player1Weapon + ".");
  $("#player2specs").removeClass("hidden");
  player2 = true;
  $("#robotTypes").removeClass("hidden");
  $(".robotType").removeClass("selected");
  buildPlayer1();
});

$("#confirmPlayerTwo").click(function() {
  $("#robotTypes, #weapons, #modifications, #confirmPlayerTwo").addClass("hidden");
  $("#player2specs")
  .text("Player Two selected a " + player2RobotType + " with " + player2Modification + " and a " + player2Weapon + ".");
  buildPlayer2()
  battleRound(player1Robot, player2Robot);
});
