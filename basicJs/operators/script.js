// arethematic operators -->( _, +, *, /, %)
console.log("arethematic operators");
let a=20
let b=10
console.log(a-b);
console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// assingment operators -->(=, +=, -=, *=, /=, %=)
console.log("assingment operators");
let c = 11;

// c = c % 4; 
c %= 4
console.log(c);

// c = c - 10; 
c -= 4
console.log(c);

// c = c + 40; 
c += 8
console.log(c);

// c = c * 40; 
c *= 7
console.log(c);

// c = c / 40; 
c /= 5
console.log(c);

// c = c ; 
c = 15
console.log(c);


// logical operators -->(&&,||,!)
console.log("logical operators");
var isTrue = true;
var isFalse = false;
console.log("AND operator: ", isTrue && isFalse);
console.log("OR operator: ", isTrue || isFalse);
console.log("NOT operator: ", !true);

// increment/decrement operators -->(a--, a++)
console.log("increment/decrement operators");
var Counter = 0;
console.log(Counter);
Counter++
console.log("after increment:", Counter);
Counter--
console.log("after decrement:", Counter);

// comparison operators -->(==, =>, =<, !=, <, >, ===)
console.log("comparison operators ");
let i = 15
let j = 12
console.log(i > j, typeof j);
console.log(i < j, typeof i);
console.log(i == j);
console.log(i <= j);
console.log(i >= j);
console.log(i === j);
console.log(i != j);