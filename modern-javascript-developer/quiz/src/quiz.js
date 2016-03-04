"use strict";
console.log("Javascript!");

let $ = require("../lib/node_modules/jQuery/dist/jquery.min.js");
let players = require.("./players");

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
  players.buildPlayer1();
});

$("#confirmPlayerTwo").click(function() {
  $("#robotTypes, #weapons, #modifications, #confirmPlayerTwo").addClass("hidden");
  $("#player2specs")
  .text("Player Two selected a " + player2RobotType + " with " + player2Modification + " and a " + player2Weapon + ".");
  players.buildPlayer2();
  $("#battleButton").removeClass("hidden");
});

$("#battleButton").click(function() {
  $("#battleButton").addClass("hidden");
  $("#roundButton").removeClass("hidden");
  battle();
});



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

function battleRound(attacker, defender) {
  console.log("attacker.weapon.damage", attacker.weapon.damage);
  let actualDamage = attacker.weapon.damage * attacker.modification.damage;
  if (evasion(defender.modification.evasion) === true ) {
    //display defender has evaded attack!
    console.log("Evaded attack!");
    $("#output").append("<p>Defender evaded attack!</p>");
    return 0;
  }
  actualDamage = Math.round(actualDamage / defender.modification.protection);
  console.log("actualDamage", actualDamage);
  return actualDamage;
}

function battle() {
  let player1Health = player1Robot.health;
  let player2Health = player2Robot.health;
  $("#output").append(`<p> Player 1 Starting Health: ${player1Health}</p>`);
  $("#output").append(`<p> Player 2 Starting Health: ${player2Health}</p>`);
  let attacker = coinToss();
  let round = 1;
  function attack() {
    $("#output").append(`<h2>Round ${round}</h2>`);
    if (attacker == 1) {
      let damage = battleRound(player1Robot, player2Robot);
      player2Health = player2Health - damage;
      $("#output").append(`<p>player 1 did ${damage} damage</p>`);
      attacker = 2;
    } else {
      let damage = battleRound(player2Robot, player1Robot);
      player1Health = player1Health - damage;
      $("#output").append(`<p>player 2 did ${damage} damage</p>`);
      attacker = 1;
    }
    $("#output").append(`<p> Player 1 Health: ${player1Health} and Player 2 Health: ${player2Health}</p>`);
    round++;
  }
  /////////
  attack();
  /////////
  $("#roundButton").click(() => {
    attack();
    if (player1Health <= 0 || player2Health <= 0) {
      $("#roundButton").addClass('hidden');
      if(player1Health > player2Health) {
        $("#output").append("<h2>Player One Wins!</h2>");
      } else {
        $("#output").append("<h2>Player Two Wins!</h2>");
      }
    }
  });
}






