const artists = [
  {
    id: 0,
    name: "Lady Gaga",
    genre: "pop",
    image_url: "https://media.nbcnewyork.com/2022/01/lady-gaga-getty-tlmd.jpg?quality=85&strip=all&fit=1878%2C1056&w=975&h=548&crop=1",
    description: "She wore a meat dress - it wasn't cool.",
    net_worth: 2000000000
  },
  {
    id: 1,
    name: "Bach",
    genre: "classical",
    image_url: "https://media.npr.org/assets/img/2013/10/29/gardiner_haussmann-b7274171073b4700144cbee8f7671a2d052c5a7a-s1100-c50.jpg",
    description: "This guy made some bangers in 1800",
    net_worth: 0
  },
  {
    id: 2,
    name: "Olivia Rodrigez",
    genre: "pop",
    image_url: "https://celebmafia.com/wp-content/uploads/2022/05/olivia-rodrigo-riding-a-bike-around-washington-dc-05-04-2022-2.jpg",
    description: "Who is this girl dating again? I forgot",
    net_worth: 1000000
  },
  {
    id: 3,
    name: "T Pain",
    genre: "rap",
    image_url: "https://media.vanityfair.com/photos/60d233fba7fbd576291fc5eb/master/w_2560%2Cc_limit/1199729747",
    description: "This guy likes autotune",
    net_worth: 500000000
  },
  {
    id: 4,
    name: "Tame Impala",
    genre: "indie",
    image_url: "https://www.rollingstone.com/wp-content/uploads/2019/03/Tame-Impala-Matt-Sav-SYNTK.jpg",
    description: "His song got stuck in my head for 1 week",
    net_worth: 5000000
  }
];

const result = document.getElementById("result");

for (let i = 0; i < artists.length; i++) {
  result.innerHTML += `
  <div class="artist-profile">
    <img src="${artists[i].image_url}" alt="${artists[i].name}">
    <div class="content-wrapper">
      <h4>${artists[i].name}</h4>
      <h5>${artists[i].genre}</h5>
      <p>${artists[i].description}</p>
      <a class="button modal-button" id="${artists[i].id}">Check net worth <i class="bi bi-arrow-right"></i></a>
    </div>
  </div>
  `
}

// get all the buttons by using the JS method getElementsByClassName
const modalButtonsArray = document.getElementsByClassName("modal-button");

for (let i=0; i < modalButtonsArray.length; i++){
  // show the individual button
  console.log(modalButtonsArray[i]);
}
