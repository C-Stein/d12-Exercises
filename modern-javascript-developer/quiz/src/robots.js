"use strict";

let helper = require("./helper");

function Robot() {
  this.modification = "";
  this.weapon = "";
}

///Building Drones///
function Drone() {
  this.health = helper.randomRange(80, 120);
}

Drone.prototype = new Robot();

function AngryBird() {
  this.health = helper.randomRange(80, 120);
  this.modification = "";
}

AngryBird.prototype = new Drone();

function Pegasus() {
  this.type = "pegasus";
  this.health = helper.randomRange(80, 120);
}

Pegasus.prototype = new Drone();

///Building Bipedals///
function Bipedal() {

}
Bipedal.prototype = new Robot();

function Voltron() {
  this.health = helper.randomRange(80, 120);
}
Voltron.prototype = new Bipedal();

function Cylon () {
  this.health = helper.randomRange(80, 120);
}
Cylon.prototype = new Bipedal();


///Building ATVs///
function ATV() {

}
ATV.prototype = new Robot();

function Warthog() {
  this.health = helper.randomRange(80, 120);
}
Warthog.prototype = new ATV();

function KITT() {
  this.health = helper.randomRange(80, 120);
}
KITT.prototype = new ATV();

let robots = {
  Robot, Drone, AngryBird, Pegasus, Bipedal, Voltron, Cylon, ATV, Warthog, KITT
};

module.exports = robots;