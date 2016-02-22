"use strict";
console.log("javascript!");

function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function absolute(callback, a, b) {
  var answer = callback(a, b);
  if (answer < 0) {
    return answer * -1;
  } else {
    return answer;
  }
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
};

function square(a) {
  return a * a;
};

function squareRoot(a) {
  return Math.sqrt(a);
};

function calculate(callback) {
  var num1 = $("#input").val();
  var num2;
  num1 = parseInt(num1);
  $("input").val('');
  $("#enter").on("click", function(){
    num2 = $("#input").val();
    num2 = parseInt(num2);
    $("#input").val(callback(num1, num2));
  })
};


$("#add").on("click", function() {
      calculate(add);
});

$("#subtract").on("click", function() {
      calculate(subtract);
});

$("#multiply").on("click", function() {
      calculate(multiply);
});

$("#divide").on("click", function() {
      calculate(divide);
});

$("#square").on("click", function() {
  var num1 = $("#input").val();
  num1 = parseInt(num1);
  $("input").val(square(num1));
});

$("#squareRoot").on("click", function() {
  var num1 = $("#input").val();
  num1 = parseInt(num1);
  $("input").val(squareRoot(num1));
});










