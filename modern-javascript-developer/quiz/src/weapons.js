"use strict";

let helper = require("./helper");

///Building weapons
function Weapon() {

}

function Spoon() {
  this.damage = helper.randomRange(15, 20);
  this.name = "Spoon";
}
Spoon.prototype = new Weapon();

function Wand() {
  this.damage = helper.randomRange(5, 30);
  this.name = "Wand";
}
Wand.prototype = new Weapon();

function LightSaber() {
  this.damage = helper.randomRange(20, 30);
  this.name = "LightSaber";
}
LightSaber.prototype = new Weapon();

function Scimitar() {
  this.damage = helper.randomRange(10, 20);
  this.name = "Scimitar";
}
Scimitar.prototype = new Weapon();

function NailClippers() {
  this.damage = helper.randomRange(5, 15);
  this.name = "NailClippers";
}
NailClippers.prototype = new Weapon();

function ProtonPack() {
  this.damage = helper.randomRange(5, 20);
  this.name = "ProtonPack";
}
ProtonPack.prototype = new Weapon();

let weapons = {
  Spoon, Wand, LightSaber, Scimitar, NailClippers, ProtonPack
}
module.exports = weapons;