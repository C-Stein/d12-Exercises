"use strict";

function evasion(chance)  {
  if (Math.random() < chance) {
    return true;
  } else {
    return false;
  }
}

function battleRound(attacker, defender) {
  console.log("attacker.health", attacker.health);
  console.log("defender.health", defender.health);
  console.log("attacker.weapon.damage", attacker.weapon.damage);
  let actualDamage = attacker.weapon.damage * attacker.modification.damage
  if (evasion(defender.modification.evasion) == true ) {
    //display defender has evaded attack!
    console.log("Evaded attack!");
    $("#output").append(defender + "evaded attack!");
    return 0;
  }
  actualDamage = actualDamage / defender.modification.protection;
  console.log("actualDamage", actualDamage);
  return actualDamage;
}

