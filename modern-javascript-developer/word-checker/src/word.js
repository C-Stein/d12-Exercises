"use strict";
console.log("javascript!");

function checkWordCount(string) {
  let stringArray = string.split(' ');
  console.log(stringArray.length);
  if (stringArray.length > 100) {
    return false
  }
  return true;
};

function duplicateCheck(string) {
  let stringArray = string.split(' ');
  let uniqueList = string.split(' ').filter(function(item,i,allItems){
    return i == allItems.indexOf(item);
  });
  console.log("stringArray.length", stringArray.length);
  console.log("uniqueList.length", uniqueList.length);
  if (stringArray.length != uniqueList.length) {
        console.log("false");
    return false
  }
  return true;
};

function verifyAlphaNumeric(string) {
  if(/^[a-zA-Z0-9- ]*$/.test(string) == false) {
    return false;
  }
  return true;
  
};