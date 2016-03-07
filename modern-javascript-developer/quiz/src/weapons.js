"use strict";

let helper = require("./helper");

///Building weapons
function Weapon() {
  this.damage = helper.randomRange(15, 20);
}

function Spoon() {
  this.damage = this.damage + 5;
  this.name = "Spoon";
}
Spoon.prototype = new Weapon();

function Wand() {
  this.damage = this.damage + 3;
  this.name = "Wand";
}
Wand.prototype = new Weapon();

function LightSaber() {
  this.damage = this.damage + 7;
  this.name = "LightSaber";
}
LightSaber.prototype = new Weapon();

function Scimitar() {
  this.damage = this.damage + 2;
  this.name = "Scimitar";
}
Scimitar.prototype = new Weapon();

function NailClippers() {
  this.damage = this.damage - 2;
  this.name = "NailClippers";
}
NailClippers.prototype = new Weapon();

function ProtonPack() {
  this.damage = this.damage + 8;
  this.name = "ProtonPack";
}
ProtonPack.prototype = new Weapon();

let weapons = {
  Spoon, Wand, LightSaber, Scimitar, NailClippers, ProtonPack
};
module.exports = weapons;