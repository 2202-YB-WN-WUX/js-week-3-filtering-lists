const artists = [
  {
    id: 0,
    name: "Lady Gaga",
    genre: "pop",
    image_url: "https://media.nbcnewyork.com/2022/01/lady-gaga-getty-tlmd.jpg?quality=85&strip=all&fit=1878%2C1056&w=975&h=548&crop=1",
    description: "She wore a meat dress - it wasn't cool.",
    net_worth: 20000
  },
  {
    id: 1,
    name: "Bach",
    genre: "classical",
    image_url: "https://media.npr.org/assets/img/2013/10/29/gardiner_haussmann-b7274171073b4700144cbee8f7671a2d052c5a7a-s1100-c50.jpg",
    description: "This guy made some bangers in 1800",
    net_worth: 1000
  },
  {
    id: 2,
    name: "Olivia Rodrigez",
    genre: "pop",
    image_url: "https://celebmafia.com/wp-content/uploads/2022/05/olivia-rodrigo-riding-a-bike-around-washington-dc-05-04-2022-2.jpg",
    description: "Who is this girl dating again? I forgot",
    net_worth: 10000
  },
  {
    id: 3,
    name: "T Pain",
    genre: "rap",
    image_url: "https://media.vanityfair.com/photos/60d233fba7fbd576291fc5eb/master/w_2560%2Cc_limit/1199729747",
    description: "This guy likes autotune",
    net_worth: 5000000
  },
  {
    id: 4,
    name: "Tame Impala",
    genre: "indie",
    image_url: "https://www.rollingstone.com/wp-content/uploads/2019/03/Tame-Impala-Matt-Sav-SYNTK.jpg",
    description: "His song got stuck in my head for 1 week",
    net_worth: 50000
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
// console.log(modalButtonsArray);

for (let i=0; i < modalButtonsArray.length; i++){
  // show the individual button
  // console.log(modalButtonsArray[i]);
  modalButtonsArray[i].onclick = function(){
    // console.log("you clicked on a button");
    // put the buttons id into a variable
    let currentButtonId = this.id;
    // let currentButtonId = this
    openModal(currentButtonId);
  }
}

const modalOverlay = document.getElementById("modal-overlay");
const modalContent = document.getElementById("modal-content");
const netWorthElement = document.getElementById("net-worth-data");
const closeBtn = document.getElementById("close-button");

closeBtn.onclick = function(){
  closeModal();
  clearInterval(countNetWorth);
}

function openModal(id) {
  // console.log(id);
  // console.log(artists[id].net_worth);
  // update the net worth element with our net worth from the artist ID

  // if(countNetWorth){
  //   clearInterval(countNetWorth);
  // }
  netWorthElement.innerHTML = "";
  let startingNetWorth = 0;
  if(artists[id].net_worth > 30000) {
    startingNetWorth = artists[id].net_worth - 30000;
  }
  countNetWorth = setInterval(function () {
    if(startingNetWorth < artists[id].net_worth) {
      startingNetWorth = startingNetWorth + 100;
      netWorthElement.innerHTML = `
      $${startingNetWorth}
      `;
    }else {
      clearInterval(countNetWorth);
    }
  }, 1);


  modalOverlay.classList.toggle("active");
  // delay the animation
  let delayAnimation = setTimeout(fadeIn, 300);
  function fadeIn(){
    modalContent.classList.toggle("active");
  }
}

function closeModal() {
  modalContent.classList.toggle("active");
  let delayAnimation = setTimeout(fadeIn, 300);
  function fadeIn(){
    modalOverlay.classList.toggle("active");
  }
}

// count net worth

// let amountOfTimes = 0;
//
// countNetWorth = setInterval(function () {
//     // whatever goes in here gets run over and over again
//     console.log(amountOfTimes);
//     amountOfTimes = amountOfTimes + 1000;
//     if (amountOfTimes == 1001000) {
//       clearInterval(countNetWorth);
//     }
//   }, 1);
//



// Pseudo code
// -Create a set interval which repeats something over and over
// -create number which starts at 0 (declare this outside of the setInterval)
// -check with if statement if number is less than the networth number
// - if it's less add 1000
// - show current number on screen (inside the setInterval)
