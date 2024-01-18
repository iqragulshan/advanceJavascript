
let classMates = ["iqra", "aliyan", "sultan", "kulsum"];
console.log(classMates);

// item in index
console.log(classMates[3]); 

// length
console.log(classMates.length);

// Array Methods:
// push():
let cities = ["lahore", "multan", "quetta"]
console.log(cities.push("isb"));
console.log(cities);

// pop():
let countries = ["india", "korea", "itly", "china"]
console.log(countries.pop());
console.log(countries);

// shift():
let numbers = [1, 2, 3, 4]
console.log(numbers.shift());
console.log(numbers);

// unshift():
let  myNumbers = [5, 6, 7, 8, 9]
console.log(myNumbers.unshift(2));
console.log(myNumbers);

// concat():
let planets = ["mercury", "venus", "earth", "mars", "jupiter", "satrun", "uranus"];
let planet = ["neptune"]
let allPlanets = planets.concat(planet)
console.log(allPlanets);

// indexOf():
let stdName = ['iqra', 'ali', 'sara', 'sami', "kulsum"];
let indexOfExample = stdName.indexOf("sami")
console.log("index of sami is:", indexOfExample );

// slice():
let fruits = ["apple", "grapes", "kiwi", "pineapple"]
let sliceExample = cities.slice(3)
console.log(sliceExample);

// splice():
let moreFruits = ["figs", "banana", "mango", "lemon"]
let spliceExample = moreFruits.splice(2, 3, "orange", "cheery")
console.log(spliceExample);

// find():
let employes = ["iqra", "sultan", "iqra", "kulsum", "saima", "iqra"];
console.log(employes.find( (index) => (
    index === "iqra"
)));

// filter():
console.log(employes.filter( (index) => (
    index === "iqra"
)));

// Array Iteration Methods
// Map Method:
let alphabet = ["a", "b", "c", "d", "c", "c", "c", "c"];
console.log(alphabet.map( (index) => (
    index === "c"
)));
  
// for each:
let array = [1, 2, 3, 4, 5, 6, 7]
let forEachExamle = array.forEach(item => {
    console.log(item);
});

// for:
for (let index = 0; index < array.length; index++) {
    const element = array[index]; 
    console.log(element);
}

// for of:
for ( let item of array) {
    console.log(item);   
}

// for in:
let arr = [{name:"iqra", city:"hunza"},
          {name:"rumi", city:"gilgit"}]
for (let key in arr) {
    console.log(arr);
}

// reduce:
let num = [1, 2, 3, 4];
let multiplication = num.reduce((accumulator, currentValue) => {
    return accumulator * currentValue
}, 1);

console.log(multiplication);