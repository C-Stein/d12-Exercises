"use strict";

let robots = require("./robots");
let mods = require("./mods");
let weapons = require("./weapons");

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

let players = {
  buildPlayer1, buildPlayer2
}