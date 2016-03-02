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
  this.modification = "";
  this.weapon = "";
}


///Building Drones///
function Drone() {
  this.health = 100; //(use Math.random());
}

Drone.prototype = new Robot();

function AngryBird() {
  this.health = 100;
  this.modification = "";
}

AngryBird.prototype = new Drone();

function Pegasus() {
  this.health = 100;
}

Pegasus.prototype = new Drone();

///Building Bipedals///
function Bipedal() {

}
Bipedal.prototype = new Robot();

function Voltron() {
  this.health = 100;
}
Voltron.prototype = new Bipedal();

function Cylon () {
  this.health = 100;
}
Cylon.prototype = new Bipedal();


///Building ATVs///
function ATV() {

}
ATV.prototype = new Robot();

function Warthog() {

}
Warthog.prototype = new ATV();

function KITT() {

}
KITT.prototype = new ATV();

///Building Modifications///
function Modification() {

}

function BattleShield () {
  this.evasion = 0.8;
  this.damage = 1;
  this.protection = 1.5;
}
BattleShield.prototype = new Modification();

function Spikes () {
  this.evasion = 0.8;
  this.damage = 1;
  this.protection = 1.5;
}
Spikes.prototype = new Modification();

function Sparkles () {
  this.evasion = 0.8;
  this.damage = 1;
  this.protection = 1.5;
}
Sparkles.prototype = new Modification();

function Cloak () {
  this.evasion = 0.8;
  this.damage = 1;
  this.protection = 1.5;
}
Cloak.prototype = new Modification();

function Tiara () {
  this.evasion = 0.8;
  this.damage = 1;
  this.protection = 1.5;
}
Tiara.prototype = new Modification();

function Armor () {
  this.evasion = 0.8;
  this.damage = 1;
  this.protection = 1.5;
}
Armor.prototype = new Modification();

///Building Weapons
function Weapon() {

}

function Spoon() {
  this.damage = 5 - 20;
}
Spoon.prototype = new Weapon();

function Wand() {
  this.damage = 5 - 20;
}
Wand.prototype = new Weapon();

function LightSaber() {
  this.damage = 5 - 20;
}
LightSaber.prototype = new Weapon();

function Scimitar() {
  this.damage = 5 - 20;
}
Scimitar.prototype = new Weapon();

function NailClippers() {
  this.damage = 5 - 20;
}
NailClippers.prototype = new Weapon();

function ProtonPack() {
  this.damage = 5 - 20;
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





















