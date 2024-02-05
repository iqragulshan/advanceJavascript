var personProtoType = {
    ind: function () {
        console.log("my name is:", this.name);
    },
    greet: function () {
        console.log("Hello", this.name);
       }
   
}

let names = ["saima", "ali", "Akhtar", "ahmad"]
console.log(names);

let saima = Object.create(personProtoType)
saima.name = names[0]

let ali = Object.create(personProtoType)
ali.name = names[1]

let Akhtar = Object.create(personProtoType)
Akhtar.name = names[2]

let ahmad = Object.create(personProtoType)
ahmad.name = names[3]


ahmad.greet()
saima.ind()

