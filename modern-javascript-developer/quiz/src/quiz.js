"use strict";
console.log("Javascript!");

let $ = require("../lib/node_modules/jQuery/dist/jquery.min.js");
let robots = require("./robots");
let mods = require("./mods");
let weapons = require("./weapons");
let helper = require('./helper');
let select = require('./select');




///Build Players

function buildPlayer1() {
  switch (player1RobotType) {
    case "AngryBird":
      player1Robot = new robots.AngryBird();
      break;
    case "Pegasus":
      player1Robot = new robots.Pegasus();
      break;
    case "Voltron":
      player1Robot = new robots.Voltron();
      break;
    case "Cylon":
      player1Robot = new robots.Cylon();
      break;
    case "Warthog":
      player1Robot = new robots.Warthog();
      break;
    case "KITT":
      player1Robot = new robots.KITT();
  }

  switch (player1Modification) {
    case "BattleShield":
      player1Robot.modification = new mods.BattleShield();
      break;
    case "Spikes":
      player1Robot.modification = new mods.Spikes();
      break;
    case "Sparkles":
      player1Robot.modification = new mods.Sparkles();
      break;
    case "Cloak":
      player1Robot.modification = new mods.Cloak();
      break;
    case "Tiara":
      player1Robot.modification = new mods.Tiara();
      break;
    case "Armor":
      player1Robot.modification = new mods.Armor();
      break;
  }

  switch (player1Weapon) {
    case "Spoon":
      player1Robot.weapon = new weapons.Spoon();
      break;
    case "Wand":
      player1Robot.weapon = new weapons.Wand();
      break;
    case "LightSaber":
      player1Robot.weapon = new weapons.LightSaber();
      break;
    case "Scimitar":
      player1Robot.weapon = new weapons.Scimitar();
      break;
    case "NailClippers":
      player1Robot.weapon = new weapons.NailClippers();
      break;
    case "ProtonPack":
      player1Robot.weapon = new weapons.ProtonPack();
      break;
  }

  console.log("player1Robot", player1Robot);
}

function buildPlayer2() {
  switch (player2RobotType) {
    case "AngryBird":
      player2Robot = new robots.AngryBird();
      break;
    case "Pegasus":
      player2Robot = new robots.Pegasus();
      break;
    case "Voltron":
      player2Robot = new robots.Voltron();
      break;
    case "Cylon":
      player2Robot = new robots.Cylon();
      break;
    case "Warthog":
      player2Robot = new robots.Warthog();
      break;
    case "KITT":
      player2Robot = new robots.KITT();
  }

  switch (player2Modification) {
    case "BattleShield":
      player2Robot.modification = new mods.BattleShield();
      break;
    case "Spikes":
      player2Robot.modification = new mods.Spikes();
      break;
    case "Sparkles":
      player2Robot.modification = new mods.Sparkles();
      break;
    case "Cloak":
      player2Robot.modification = new mods.Cloak();
      break;
    case "Tiara":
      player2Robot.modification = new mods.Tiara();
      break;
    case "Armor":
      player2Robot.modification = new mods.Armor();
      break;
  }

  switch (player2Weapon) {
    case "Spoon":
      player2Robot.weapon = new weapons.Spoon();
      break;
    case "Wand":
      player2Robot.weapon = new weapons.Wand();
      break;
    case "LightSaber":
      player2Robot.weapon = new weapons.LightSaber();
      break;
    case "Scimitar":
      player2Robot.weapon = new weapons.Scimitar();
      break;
    case "NailClippers":
      player2Robot.weapon = new weapons.NailClippers();
      break;
    case "ProtonPack":
      player2Robot.weapon = new weapons.ProtonPack();
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



$(".robotType").click(function() {
  let e = $(this);
  if(player2 === false) {
    player1RobotType = select.RobotType(e);
  } else {
    player2RobotType = select.RobotType(e);
  }
});

$(".weapon").click(function() {
  let e = $(this);
  if(player2 === false) {
    player1Weapon = select.Weapon(e);
  } else {
    player2Weapon = select.Weapon(e);
  }
});

$(".modification").click(function() {
  let e = $(this);
  if(player2 === false) {
    player1Modification = select.Modification(e);
    $("#confirmPlayerOne").removeClass("hidden");
  } else {
    player2Modification = select.Modification(e);
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

function battleRound(attacker, defender) {
  console.log("attacker.weapon.damage", attacker.weapon.damage);
  let actualDamage = attacker.weapon.damage * attacker.modification.damage;
  if (helper.evasion(defender.modification.evasion) === true ) {
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
  let attacker = helper.coinToss();
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








