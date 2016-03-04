"use strict";

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

let mods = {
  BattleShield, Spikes, Sparkles, Cloak, Tiara, Armor
}

module.exports = mods;