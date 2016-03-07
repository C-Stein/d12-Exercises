"use strict";

let robots = require("./robots");
let mods = require("./mods");
let weapons = require("./weapons");

function buildPlayer(playerRobotType, playerModification, playerWeapon) {
  let playerRobot;
  switch (playerRobotType) {
    case "AngryBird":
      playerRobot = new robots.AngryBird();
      break;
    case "Pegasus":
      playerRobot = new robots.Pegasus();
      break;
    case "Voltron":
      playerRobot = new robots.Voltron();
      break;
    case "Cylon":
      playerRobot = new robots.Cylon();
      break;
    case "Warthog":
      playerRobot = new robots.Warthog();
      break;
    case "KITT":
      playerRobot = new robots.KITT();
  }

  switch (playerModification) {
    case "BattleShield":
      playerRobot.modification = new mods.BattleShield();
      break;
    case "Spikes":
      playerRobot.modification = new mods.Spikes();
      break;
    case "Sparkles":
      playerRobot.modification = new mods.Sparkles();
      break;
    case "Cloak":
      playerRobot.modification = new mods.Cloak();
      break;
    case "Tiara":
      playerRobot.modification = new mods.Tiara();
      break;
    case "Armor":
      playerRobot.modification = new mods.Armor();
      break;
  }

  switch (playerWeapon) {
    case "Spoon":
      playerRobot.weapon = new weapons.Spoon();
      break;
    case "Wand":
      playerRobot.weapon = new weapons.Wand();
      break;
    case "LightSaber":
      playerRobot.weapon = new weapons.LightSaber();
      break;
    case "Scimitar":
      playerRobot.weapon = new weapons.Scimitar();
      break;
    case "NailClippers":
      playerRobot.weapon = new weapons.NailClippers();
      break;
    case "ProtonPack":
      playerRobot.weapon = new weapons.ProtonPack();
      break;
  }

  console.log("playerRobot", playerRobot);
  return playerRobot;
}

let players = {
  buildPlayer
};

module.exports = players;