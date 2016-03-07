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
  this.type = "AngryBird";
  this.health = this.health + 5;
}

AngryBird.prototype = new Drone();

function Pegasus() {
  this.type = "pegasus";
  this.health = this.health + 1;
}

Pegasus.prototype = new Drone();

///Building Bipedals///
function Bipedal() {
  this.health = helper.randomRange(80, 120);
}
Bipedal.prototype = new Robot();

function Voltron() {
  this.health = this.health + 6;
}
Voltron.prototype = new Bipedal();

function Cylon () {
  this.health = this.health + 1;
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