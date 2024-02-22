const base_url = "https://jsonplaceholder.typicode.com/users";

async function fetchPost() {
    const errorMsg = document.getElementById("error");
    const loadingState = document.getElementById("Loader");
    loadingState.style.display = "block"
    //   console.log(response, "res here");
    try {
      const response = await fetch(`${base_url}`);
      if (response.ok) {
          const data = await response.json();
          postData(data);
        }
        else {
            console.log("failed to fetch posts");
        }
    } catch (error) {
        console.log(error);
        errorMsg.innerText =error.message
    }
    finally {
      loadingState.style.display = "none"

  }
}

function deleteCard(id) {
    console.log(id);
    const dltCard = document.getElementById(`post_${id}`)
    if (dltCard) {
        dltCard.remove()
    }
}

function postData(data) {
  console.log(data, "data");
  const carSection = document.getElementById("postContainer");
  carSection.innerHTML = ""
  data.map(post => {
      const card = document.createElement('div');
      card.className = "card";
      card.id = `post_${post.id}`;
      card.innerHTML= `
      <h2>${post.userId}</h2>
      <h5> ${post.title}</h5>
      <p>${post.body}</p>
      <button onclick="deleteCard(${post.id})">delete card</button>
      `
      carSection.appendChild(card)

  })

}