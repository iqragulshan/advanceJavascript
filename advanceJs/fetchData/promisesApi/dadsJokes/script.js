const APIURL = "https://ianhazdadjoke.com/";

function fetchDadJoke() {
  return new Promise((resolve, reject) => {
    fetch(APIURL,{
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          reject("fail to fetch!");
        }
      })
      .then((data) => {
        console.log(data, "data here");
        resolve(data.joke);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

document.getElementById("getJoke").addEventListener("click", () => {
  fetchDadJoke()
  .then((joke) => {
    console.log(joke, "joke");
    document.getElementById("joke").innerText = joke;
  })
  .catch((error) =>{
    document.getElementById("joke").innerText = error;
  })
});