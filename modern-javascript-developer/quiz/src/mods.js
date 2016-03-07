"use strict";

///Building Modifications///
function Modification() {

}

function BattleShield () {
  this.evasion = 0.1;
  this.damage = 1;
  this.protection = 1.5;
  this.name = "BattleShield";
}
BattleShield.prototype = new Modification();

function Spikes () {
  this.evasion = 0.2;
  this.damage = 1.6;
  this.protection = 1.5;
  this.name = "Spikes";
}
Spikes.prototype = new Modification();

function Sparkles () {
  this.evasion = 0.4;
  this.damage = 1.3;
  this.protection = 1.2;
  this.name = "Sparkles";
}
Sparkles.prototype = new Modification();

function Cloak () {
  this.evasion = 0.4;
  this.damage = 1;
  this.protection = 1.1;
  this.name = "Cloak";
}
Cloak.prototype = new Modification();

function Tiara () {
  this.evasion = 0.2;
  this.damage = 1;
  this.protection = 1.1;
  this.name = "Tiara";
}
Tiara.prototype = new Modification();

function Armor () {
  this.evasion = 0.1;
  this.damage = 1;
  this.protection = 1.4;
  this.name = "Armor";
}
Armor.prototype = new Modification();

let mods = {
  BattleShield, Spikes, Sparkles, Cloak, Tiara, Armor
}

module.exports = mods;