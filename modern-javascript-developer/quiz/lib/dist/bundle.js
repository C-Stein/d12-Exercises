(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
console.log("Javascript!");

// A base Robot function.
// Define three robot type functions (e.g. Drone, Bipedal, ATV).
// Define at least 2 specific robot model functions for each type.
// Give each robot model a different range of health. For example, one model can have health range of 50-80, and another one will have a range of 60-120. To accomplish this, read about the Math.random() function in JavaScript.
// Define at least six different modifications and six different weapons that can be added to a robot.
// Each modification should provide some combination of the following benefits - increased protection, increased damage, or evasion capability (ability to avoid some attacks).
// Define the range of damage that each weapon can do.

function randomRange(a, b) {
  return Math.round(Math.random() * (b - a) + a);
}

function Robot() {
  this.modification = "";
  this.weapon = "";
}


///Building Drones///
function Drone() {
  this.health = randomRange(80, 120);
}

Drone.prototype = new Robot();

function AngryBird() {
  this.health = randomRange(80, 120);
  this.modification = "";
}

AngryBird.prototype = new Drone();

function Pegasus() {
  this.health = randomRange(80, 120);
}

Pegasus.prototype = new Drone();

///Building Bipedals///
function Bipedal() {

}
Bipedal.prototype = new Robot();

function Voltron() {
  this.health = randomRange(80, 120);
}
Voltron.prototype = new Bipedal();

function Cylon () {
  this.health = randomRange(80, 120);
}
Cylon.prototype = new Bipedal();


///Building ATVs///
function ATV() {

}
ATV.prototype = new Robot();

function Warthog() {
  this.health = randomRange(80, 120);
}
Warthog.prototype = new ATV();

function KITT() {
  this.health = randomRange(80, 120);
}
KITT.prototype = new ATV();

///Building Modifications///
function Modification() {

}

function BattleShield () {
  this.evasion = 0.1;
  this.damage = 1;
  this.protection = 1.5;
}
BattleShield.prototype = new Modification();

function Spikes () {
  this.evasion = 0.2;
  this.damage = 1.6;
  this.protection = 1.5;
}
Spikes.prototype = new Modification();

function Sparkles () {
  this.evasion = 0.4;
  this.damage = 1.3;
  this.protection = 1.2;
}
Sparkles.prototype = new Modification();

function Cloak () {
  this.evasion = 0.4;
  this.damage = 1;
  this.protection = 1.1;
}
Cloak.prototype = new Modification();

function Tiara () {
  this.evasion = 0.2;
  this.damage = 1;
  this.protection = 1.1;
}
Tiara.prototype = new Modification();

function Armor () {
  this.evasion = 0.1;
  this.damage = 1;
  this.protection = 1.4;
}
Armor.prototype = new Modification();

///Building Weapons
function Weapon() {

}

function Spoon() {
  this.damage = randomRange(15, 20);
}
Spoon.prototype = new Weapon();

function Wand() {
  this.damage = randomRange(5, 30);
}
Wand.prototype = new Weapon();

function LightSaber() {
  this.damage = randomRange(20, 30);
}
LightSaber.prototype = new Weapon();

function Scimitar() {
  this.damage = randomRange(10, 20);
}
Scimitar.prototype = new Weapon();

function NailClippers() {
  this.damage = randomRange(5, 15);
}
NailClippers.prototype = new Weapon();

function ProtonPack() {
  this.damage = randomRange(5, 20);
}
ProtonPack.prototype = new Weapon();

///Build Players

function buildPlayer1() {
  switch (player1RobotType) {
    case "AngryBird":
      player1Robot = new AngryBird();
      break;
    case "Pegasus":
      player1Robot = new Pegasus();
      break;
    case "Voltron":
      player1Robot = new Voltron();
      break;
    case "Cylon":
      player1Robot = new Cylon();
      break;
    case "Warthog":
      player1Robot = new Warthog();
      break;
    case "KITT":
      player1Robot = new KITT();
  }

  switch (player1Modification) {
    case "BattleShield":
      player1Robot.modification = new BattleShield();
      break;
    case "Spikes":
      player1Robot.modification = new Spikes();
      break;
    case "Sparkles":
      player1Robot.modification = new Sparkles();
      break;
    case "Cloak":
      player1Robot.modification = new Cloak();
      break;
    case "Tiara":
      player1Robot.modification = new Tiara();
      break;
    case "Armor":
      player1Robot.modification = new Armor();
      break;
  }

  switch (player1Weapon) {
    case "Spoon":
      player1Robot.weapon = new Spoon();
      break;
    case "Wand":
      player1Robot.weapon = new Wand();
      break;
    case "LightSaber":
      player1Robot.weapon = new LightSaber();
      break;
    case "Scimitar":
      player1Robot.weapon = new Scimitar();
      break;
    case "NailClippers":
      player1Robot.weapon = new NailClippers();
      break;
    case "ProtonPack":
      player1Robot.weapon = new ProtonPack();
      break;
  }

  console.log("player1Robot", player1Robot);
}

function buildPlayer2() {
  switch (player2RobotType) {
    case "AngryBird":
      player2Robot = new AngryBird();
      break;
    case "Pegasus":
      player2Robot = new Pegasus();
      break;
    case "Voltron":
      player2Robot = new Voltron();
      break;
    case "Cylon":
      player2Robot = new Cylon();
      break;
    case "Warthog":
      player2Robot = new Warthog();
      break;
    case "KITT":
      player2Robot = new KITT();
  }

  switch (player2Modification) {
    case "BattleShield":
      player2Robot.modification = new BattleShield();
      break;
    case "Spikes":
      player2Robot.modification = new Spikes();
      break;
    case "Sparkles":
      player2Robot.modification = new Sparkles();
      break;
    case "Cloak":
      player2Robot.modification = new Cloak();
      break;
    case "Tiara":
      player2Robot.modification = new Tiara();
      break;
    case "Armor":
      player2Robot.modification = new Armor();
      break;
  }

  switch (player2Weapon) {
    case "Spoon":
      player2Robot.weapon = new Spoon();
      break;
    case "Wand":
      player2Robot.weapon = new Wand();
      break;
    case "LightSaber":
      player2Robot.weapon = new LightSaber();
      break;
    case "Scimitar":
      player2Robot.weapon = new Scimitar();
      break;
    case "NailClippers":
      player2Robot.weapon = new NailClippers();
      break;
    case "ProtonPack":
      player2Robot.weapon = new ProtonPack();
      break;
  }
  console.log("player2Robot", player2Robot);
}

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
  buildPlayer2();
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























},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
