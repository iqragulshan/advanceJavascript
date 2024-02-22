function myName1() {
    console.log("saima");
    console.log("saima");
    console.log("saima");
  }
  
  myName1();
  
   
  
  function* nameGen() {
    let name = "ali";
    yield name;
    const x = 34; //pause
    console.log(x);
  
   let name3 = "JOhn";
   yield name3
  }
  
  let myName = nameGen();
  console.log(myName.next().value);
  console.log(myName.next().value);
  
  // counter
  
  function* counter() {
    let count = 0;
    while (true) {
      const countValue = yield count;
      if (countValue === "increment") {
        count++;
      } else if (countValue === "decrement") {
        count--;
        
      } else if(countValue === "reset"){
        count
      }else if(countValue === "error"){
        displayError
      }
    }
  }
  const counterExample = counter()
  
  const incrementBtn = document.getElementById("increment");
  const decrementBtn = document.getElementById("decrement");
  const displayCount = document.getElementById("displayCounter");
  const resetBtn = document.getElementById("reset");
  const error = document.getElementById("error");
  
  
  
  incrementBtn.addEventListener('click', ()=>{
      const incrementText = counterExample.next("increment").value;
      displayCount.textContent = incrementText
  })
  decrementBtn.addEventListener('click', ()=>{
      const incrementText = counterExample.next("decrement").value;
      displayCount.textContent = incrementText
  })
  
  // return() 
  resetBtn.addEventListener('click', ()=>{
    const reset = counterExample.return("reset").textContent = "reset counter"
    displayCount.textContent = reset
  })
  
  // throw()
  
   error.addEventListener("click", ()=>{
      const displayError =  counterExample.throw(new Error("something went wrong!!"));
       console.log(displayError);
});