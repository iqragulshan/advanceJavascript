// getElementById()
let getElementByIdExample = document.getElementById("firstDiv");
console.log("getElementById:", getElementByIdExample);

// querySelector()
let querySelectorExample = document.querySelector('.heading');
console.log("querySelector:", querySelectorExample);

// querySelectorAll()
let querySelectorAllExample = document.querySelectorAll('h2');
console.log("querySelectorAll:",querySelectorAllExample);

// getElementsByClassName()
let getElementsByClassNameExample = document.getElementsByClassName("para");
console.log("getElementsByClassName:", getElementsByClassNameExample);

// getElementsByName()
let getElementsByNameExample = document.getElementsByName("email");
console.log("getElementsByName:", getElementsByNameExample);

// getElementsByTagName()
let getElementsByTagNameExample= document.getElementsByTagName("h3");
console.log("getElementsByTagName:", getElementsByTagNameExample);

// alert
document.getElementById('Button').addEventListener('click', () => {
    alert("you clicked me!"); 
})

// events
function mouseOver() {
    console.log("mouseOver");
}
function mouseOut() {
    console.log("mouse Out");
}
function keyDown() {
    console.log("keyDown");
}
function keyUp() {
    console.log("key up");
}
function keyPress() {
    console.log("key press");
}
function change() {
    console.log("you changed");
}

// submit
function formSubmit() {
    alert("you're already logged in");
    console.log("you're already logged in");
}

// innerhtml()
let innerHtmlExample = document.getElementById('firstDiv').innerHTML = "hi i am from js file";

// textcontant()
document.getElementById('firstDiv').textContent = "hi i am para from js file";

// setattribute
document.getElementById('url_1').addEventListener("click", () => {
    document.getElementById('target').setAttribute("href", "www.example1.com")
})

document.getElementById('url_2').addEventListener("click", () => {
    document.getElementById('target').setAttribute("href", "www.example3.com")

 // getattributre()
    let attributeExample = document.getElementById('target').getAttribute("href")
    console.log("getattributre:", attributeExample);

    // appendChild.
    document.getElementById("showtext").append("appendchild:", attributeExample)

})

// createElement()
let mainDiv = document.getElementById('mainDiv');
let para = document.createElement("p")
console.log(para);
para.textContent = "hi i am para from js!";

// append
mainDiv.append(para)

// remove() and removechild()
function remove() {
    let myDiv = document.getElementById('mainDiv2');
    let removeText = document.getElementById('child')
    myDiv.removeChild(removeText, "my div")

    removeText.remove()
}

// style Property
let para2 = document.getElementById('myPara');
para2.style.fontSize = "20px";

// setAttribute()
para2.setAttribute("style", "font-size: 30px ; color: red")

// add and remove classes
function addClass() {
    document.getElementById("myParaa").classList.add("addedMyPara");
    console.log(addClass);
}     
addClass()

function removeClass() {
    document.getElementById("myParaa").classList.remove("addedMyPara");
    console.log(removeClass);
}
removeClass()

// creat li and append
let ul= document.getElementById("unorderedlist");
let li_1 = document.createElement("li");
li_1.textContent = "item_1";
ul.appendChild(li_1);
console.log(li_1);

let li_2 = document.createElement("li");
li_2.textContent = "item_2";
ul.appendChild(li_2);
console.log(li_2);

let li_3 = document.createElement("li");
li_3.textContent = "item_3";
ul.appendChild(li_3);
console.log(li_3);