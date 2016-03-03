"use strict";

function evasion(chance)  {
  if (Math.random() < chance) {
    return true;
  } else {
    return false;
  }
}

function coinToss() {
  if (Math.random() > .5) {
    $("#output").append("Player One won the coin toss");
    return 1;
  } else {
    $("#output").append("Player Two won the coin toss");
    return 2;
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
    $("#output").append("<p>defender evaded attack!</p>");
    return 0;
  }
  actualDamage = Math.round(actualDamage / defender.modification.protection);
  console.log("actualDamage", actualDamage);
  return actualDamage;
}

function battle() {
  let player1Health = player1Robot.health;
  let player2Health = player2Robot.health;
  $("#output").append("<p> Player 1 Starting Health: " + player1Health + "</p>");
  $("#output").append("<p> Player 2 Starting Health: " + player2Health + "</p>");
  let attacker = coinToss();
  let round = 1;
  function attack() {
    $("#output").append("<h2>Round " + round + "</h2>")
    if (attacker == 1) {
      let damage = battleRound(player1Robot, player2Robot);
      player2Health = player2Health - damage;
      $("#output").append("<p>player 1 did " + damage + " damage</p>");
      $("#output").append("<p> Player 2 Health: " + player2Health + "</p>");
      attacker = 2;
    } else {
      let damage = battleRound(player2Robot, player1Robot);
      player1Health = player1Health - damage;
      $("#output").append("<p>player 2 did " + damage + " damage</p>");
      $("#output").append("<p> Player 1 Health: " + player1Health + "</p>");
      attacker = 1;
    }
    round++;
  }
  /////////
  attack();
  /////////
  while (player1Health > 0 && player2Health > 0) {
    attack();
  }
  if(player1Health > player2Health) {
    $("#output").append("<h2>Player One Wins!</h2>")
  } else {
    $("#output").append("<h2>Player Two Wins!</h2>")
  }
}

