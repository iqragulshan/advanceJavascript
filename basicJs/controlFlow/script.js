// CONDITIONAL STATEMENTS

// If
console.log("if");
var studentName = "iqra";
if (studentName) {
    console.log("you are in",studentName);
}

// else
console.log("else");
let marks = 80;
if (marks > 40) {
    console.log("congrats you're pass!");
} else {
    console.log("oops you failed!");
}

//  else if
console.log("else if");
let drink = "dew";

if (drink == "pepsi") { 
    console.log("serve it to male guests");

} else if (drink == "fanta") {
    console.log("serve it to female guests ");

} else {
    console.log("do not serve");
}

// Switch 
console.log("switch");
let months = "january";
switch (months) {

    case "january":
        console.log("you can continue your vacations");
        break;
    case "feb":
        console.log("vacations ended");
        break;
    case "march":
        console.log("you cannot take any leaves");
        break;

    default:
        console.log("month not recognized");
        break;
}

// LOOPS

// for
console.log("for loop");
for (let i = 0; i < 6; i++) {
    console.log("increment numbers:", i);
}

// while
console.log("while");
let number = 0
while (number <= 10) {
    console.log(number);
    number++
}

// do while
console.log("do while");
let count = 0;
do {
    console.log("first numbers", count);
    count++
} while (count < 15) {
    console.log("last numbers", count);

};

// TERNIARY OPERATORS
console.log("TERNIARY OPERATORS");
let yourAge = 8;
        let requiredAge = yourAge <= 5 ? "greater" : "lesser";
        console.log(requiredAge);

   