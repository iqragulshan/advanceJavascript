function myName() {
    let myName = "iqra"
    console.log(myName);
}
myName();

let sub = function (a, b) {
    return a - b;
  }
  let subtraction = sub(5, 10);
  console.log(subtraction);

// hoisting function
sum()
function sum(a,b) {
    return a+b;
}

let addition = sum(9, 10);
  console.log(addition);

// global scope
var day = "monday"

function days() {
    console.log(day);
}
days()

// function scope
function name() {
    let fName = "iqra"
    console.log(fName);
}
name();

// block scope
function addNumbers() {
    if (true) {
        let num1 = 10;  
        let num2 = 20;  

        let result = num1 + num2;
        console.log("sum of numbers:", result);
    }
}
addNumbers();