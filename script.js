
const container = document.getElementsByClassName("container")[0];

function disneyCard() {
  const url = "https://api.disneyapi.dev/character";

  
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((disney) => {
     
     
      disney.data.forEach((element) => {
     

        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("style", "width: 18rem;");
        card.innerHTML += `
                <div class="card-body">
                  <img src="${element.imageUrl}" alt="image unavailable" width="250px" height="120px">
                  <p class="card-text" style="font-family: Avant Garde,Avantgarde,Century Gothic,CenturyGothic,AppleGothic,sans-serif;" >Character Name : ${element.name} Kilograms</p>
                  <p class="card-text" style="font-family: Avant Garde,Avantgarde,Century Gothic,CenturyGothic,AppleGothic,sans-serif;">Character Id : ${element._id}</p>
                  </div>`;
        container.append(card);
      });
    }).catch((error)=>console.log(error))
}

disneyCard();