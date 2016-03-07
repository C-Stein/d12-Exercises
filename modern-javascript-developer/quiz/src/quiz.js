"use strict";
console.log("Javascript!");

const $ = require("../lib/node_modules/jQuery/dist/jquery.min.js");
const robots = require("./robots");
const mods = require("./mods");
const weapons = require("./weapons");
const helper = require('./helper');
const select = require('./select');
const players = require('./players');

let player1Robot;
let player2Robot;
let playerRobotType;
let playerWeapon;
let playerModification;
let player2RobotType;
let player2Weapon;
let player2Modification;
let player2 = false;



$(".robotType").click(function() {
  let e = $(this);
    playerRobotType = select.RobotType(e);
});

$(".weapon").click(function() {
  let e = $(this);
    playerWeapon = select.Weapon(e);
});

$(".modification").click(function() {
  let e = $(this);
    playerModification = select.Modification(e);
    $("#confirmPlayerOne").removeClass("hidden");
});

//little extra: add a "name your robot" field

  $("#confirmPlayerOne").click(function() {
   if (player2 === false) {
      console.log("confirm player 1");
      player1Robot = players.buildPlayer(playerRobotType, playerModification, playerModification);
      $("#robotTypes, #weapons, #modifications, #confirmPlayerOne").addClass("hidden");
      $("#player1specs")
      .text("Player One selected a " + player1Robot.type + " with " + player1Robot.modification.name + " and a " + player1Robot.weapon.name + ".");
      $("#player2specs").removeClass("hidden");
      $("#robotTypes").removeClass("hidden");
      $(".robotType").removeClass("selected");
      player2 = true;
    } else {
      console.log("confirm player 2");
      player2Robot = players.buildPlayer(playerRobotType, playerModification, playerModification);
      $("#robotTypes, #weapons, #modifications, #confirmPlayerTwo").addClass("hidden");
      $("#player2specs")
      .text("Player Two selected a " + player2Robot.type + " with " + player2Robot.modification.name + " and a " + player2Robot.weapon.name + ".");
      $("#battleButton").removeClass("hidden");
      $("#confirmPlayerOne").addClass("hidden");
    }
    console.log("player2", player2);
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
  ///first attack
  attack();

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


