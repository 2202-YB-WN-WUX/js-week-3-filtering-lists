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
    name: "Olivia Rodrigo",
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
  },
  {
    id: 5,
    name: "Alt J",
    genre: "indie",
    image_url: "https://media.npr.org/assets/img/2017/05/31/alt-j-0b2fe70e6db0c08545aaed5adaebf2f61ff1e16b-s1100-c50.jpg",
    description: "Real cool chords in some of their songs",
    net_worth: 150000
  },
  {
    id: 6,
    name: "Skrillex",
    genre: "dnb",
    image_url: "https://www.billboard.com/wp-content/uploads/media/skrillex-2011-billboard-1548.jpg",
    description: "goes hard",
    net_worth: 520000
  },
  {
    id: 7,
    name: "Queen Latifa",
    genre: "pop",
    image_url: "https://i0.wp.com/mckoysnews.com/wp-content/uploads/2020/03/queen-latifah.jpg?fit=600%2C399&ssl=1",
    description: "goes hard",
    net_worth: 21520000
  }
];

const result = document.getElementById("result");
showAllArtists();


const modalButtonsArray = document.getElementsByClassName("modal-button");
// console.log(modalButtonsArray);

const modalOverlay = document.getElementById("modal-overlay");
const modalContent = document.getElementById("modal-content");
const netWorthElement = document.getElementById("net-worth-data");
const closeBtn = document.getElementById("close-button");

generateButtons();

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

// Activity:
//
// - Create an array called "people", fill it with objects (5-6)
// - Each object should a property "name", "age" and "imageURL"
// - Show all the people on the screen using a loop and innerHTML
//
// Activity 2:
//
// - Add new property to your people called "favorite_song" and
// give them a single favorite song
// - Add a new property to your people called "ID". Make it 0
// for the first person, 1 for the second, and so on.
// - Add a button to each person's card that says "check their favorite song"
// - In the loop, make the button's HTML ID equal to the person's ID
// `<a class="button" id="">Check song</a>`
//
// Activity 3:
// - Gather all buttons into a variable (array) using getElementsByClassName
// - Create a loop which loops over the button array
// - Create an onclick function for each button within the loop
// - If the button is clicked, console log the HTML id of the button
// Hint: use "this.id"
//
// Activity 4: Modal
// - When the "check song" button is clicked, run a function called openModal
// which takes an an argument (the button's id)
// - Your openModal function should toggle an active class on a hidden
// modal element in your HTML
// - Show the "Favorite Song" in the opened modal, and add a close button
// so you can check other artists favorite songs.

// ------------------notifcations bar---------------
const notifications = document.getElementById("notifications");

// -----------------search function------------------

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

// this variable will become true if we find an artist
let artistFound;

searchBtn.onclick = function() {
  filterSearchWord();
}

function filterSearchWord(){
  // get the search word
  let searchString = searchInput.value;
  // check if this search word was empty
  if (searchString == ""){
    notifications.innerHTML = `
    <div class="alert">Please enter a search term...</div>
    `
  } else {
    runSearch(searchString);
  }
}

function runSearch(string){
  // artist is not found by default, only gets turned on if there's a match
  artistFound = false;
  let artistsFoundNumber = 0;
  // console.log(string);
  // console.log("You ran a search");
  result.innerHTML = "";

  for (let i = 0; i < artists.length; i++) {
    // lowercase string is the user search, changed to lower case
    let lowercaseSearchString = string.toLowerCase();
    // turn each iteration of an artist name into a variable, that is lower case
    let lowercaseArtistName = artists[i].name.toLowerCase();
    // declare a variable called match, it will become true if the
    // artist name includes anything within the search term
    let match = lowercaseArtistName.includes(lowercaseSearchString);
    // console.log(lowercaseArtistName);
    // console.log(match);
    if (match == true) {
      artistsFoundNumber++;
      artistFound = true;
      generateArtist(i);
      notifications.innerHTML = `
      <div class="alert">Your search term <strong>"${string}"</strong> returned ${artistsFoundNumber} results.</div>
      `
    }
  }

  // loop through All the artists
  // for (let i = 0; i < artists.length; i++) {
  //   // console.log(artists[i].name);
  //   // check if this indivual artist name matches the string
  //   if(string.toLowerCase() == artists[i].name.toLowerCase()){
  //     artistFound = true;
  //     // an artist was matched
  //     notifications.innerHTML = "";
  //     // if it matches the string, retrn a message
  //     // console.log("Success: you found " + artists[i].name);
  //     result.innerHTML += `
  //     <div class="artist-profile">
  //       <img src="${artists[i].image_url}" alt="${artists[i].name}">
  //       <div class="content-wrapper">
  //         <h4>${artists[i].name}</h4>
  //         <h5>${artists[i].genre}</h5>
  //         <p>${artists[i].description}</p>
  //         <a class="button modal-button" id="${artists[i].id}">Check net worth <i class="bi bi-arrow-right"></i></a>
  //       </div>
  //     </div>
  //     `
  //   }
  //   generateButtons();
  // } //end of loop which checks if a artist name matches
  //
  if (artistFound == false){
    notifications.innerHTML = `
    <div class="alert">Your search term "${string}" returned no results.</div>
    `
  }
}

// ------------filtering via genre---------

const filterBtn = document.getElementById("genre-filter-button");

filterBtn.onclick = function(){
  filterGenre();
}

let filtered = false;
let filteredGenres = [];

function filterGenre() {
  // reset our list of artists
  result.innerHTML = "";
  // grab the checked boxes
  let checkedBoxes = document.querySelectorAll("input[type=checkbox]:checked");
  // console.log(checkedBoxes);
// declare an array to contain all the checked genres
  const selectedGenres = [];

  for (let i = 0; i < checkedBoxes.length; i++) {
    // grab each individual genre value
    // console.log(checkedBoxes[i].value);
    selectedGenres.push(checkedBoxes[i].value);
  }
  console.log(selectedGenres);
  if (selectedGenres.length == 0 ) {
    showAllArtists();
    notifications.innerHTML = `
    <div class="alert">Showing all artists</div>
    `
    filtered = false;
  } else {
    // selected genres are greater than 0
    // console.log("You have selected a genre now");
    filtered = true;
    filteredGenres = selectedGenres;

    notifications.innerHTML = "";
    notifications.innerHTML = `
    <span id="genre-preface">Showing genres: </span>
    `
    for (let i = 0; i < selectedGenres.length; i++) {
      notifications.innerHTML += `
      <span class="alert-genre">${selectedGenres[i]}</span>
      `
    }
    // notifications.innerHTML = `
    // <div class="alert">Showing genres: ${selectedGenres}</div>
    // `
    for (let i = 0; i < selectedGenres.length; i++) {

      if(selectedGenres[i] == "pop") {
        // console.log("We found out that you were searching for pop music");
        // loop through the artists array and compare the genre that
        // the user chose to the genre of each artist
        for (let i = 0; i < artists.length; i++) {
          if(artists[i].genre == "pop") {
            generateArtist(i);
          } //end if statement
        } //end loop checking all artists
      } //end of if statement

      if(selectedGenres[i] == "rap") {
        // console.log("We found out that you were searching for pop music");
        // loop through the artists array and compare the genre that
        // the user chose to the genre of each artist
        for (let i = 0; i < artists.length; i++) {
          if(artists[i].genre == "rap") {
            generateArtist(i);
          } //end if statement
        } //end loop checking all artists
      } //end of if statement

      if(selectedGenres[i] == "classical") {
        // console.log("We found out that you were searching for pop music");
        // loop through the artists array and compare the genre that
        // the user chose to the genre of each artist
        for (let i = 0; i < artists.length; i++) {
          if(artists[i].genre == "classical") {
            generateArtist(i);
          } //end if statement
        } //end loop checking all artists
      } //end of if statement

      if(selectedGenres[i] == "indie") {
        // console.log("We found out that you were searching for pop music");
        // loop through the artists array and compare the genre that
        // the user chose to the genre of each artist
        for (let i = 0; i < artists.length; i++) {
          if(artists[i].genre == "indie") {
            generateArtist(i);
          } //end if statement
        } //end loop checking all artists
      } //end of if statement

      if(selectedGenres[i] == "dnb") {
        // console.log("We found out that you were searching for pop music");
        // loop through the artists array and compare the genre that
        // the user chose to the genre of each artist
        for (let i = 0; i < artists.length; i++) {
          if(artists[i].genre == "dnb") {
            generateArtist(i);
          } //end if statement
        } //end loop checking all artists
      } //end of if statement

    }// end of for loop
    generateButtons();
  } //end of the else statement
} // end of filter genre function

function showAllArtists(){
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
}

function generateArtist(index){
  result.innerHTML += `
  <div class="artist-profile">
    <img src="${artists[index].image_url}" alt="${artists[index].name}">
    <div class="content-wrapper">
      <h4>${artists[index].name}</h4>
      <h5>${artists[index].genre}</h5>
      <p>${artists[index].description}</p>
      <a class="button modal-button" id="${artists[index].id}">Check net worth <i class="bi bi-arrow-right"></i></a>
    </div>
  </div>
  `
}

function generateButtons(){
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
}

// Activity:
// Your goal is to add 3 new artists.
// And make one of them belong to a new genre.
// Get them working in with the app.

// Activity:
// Add a plus button in the bottom right corner.
// Clicking on the button will popup a modal.
// The modal will allow you to enter new artists.
// Artist name, genre (dropdown), net worth.
// Add a submit button too.
// New artists should show on the screen and be filterable.

const addArtistBtn = document.getElementById("add-new-button");
const artistModalOverlay = document.getElementById("artist-modal-overlay");
const artistModalContent = document.getElementById("artist-modal-content");
const artistCloseBtn = document.getElementById("artist-close-button");


addArtistBtn.onclick = function() {
  openNewArtistModal();
}

artistCloseBtn.onclick = function() {
  closeArtistModal();
}

function openNewArtistModal() {
  addArtistBtn.classList.toggle("hidden");
  artistModalOverlay.classList.toggle("active");
  // delay the animation
  let delayAnimation = setTimeout(fadeInArtist, 300);
  function fadeInArtist(){
    artistModalContent.classList.toggle("active");
  }
}

function closeArtistModal() {
  artistModalContent.classList.toggle("active");
  // delay the animation
  let delayAnimation = setTimeout(fadeInArtist, 300);
  function fadeInArtist(){
    artistModalOverlay.classList.toggle("active");
    addArtistBtn.classList.toggle("hidden");
  }
}

const submitArtistBtn = document.getElementById("submit-artist-button");
const artistName = document.getElementById("artist-name");
const artistImgUrl= document.getElementById("artist-img-url");
const artistGenre = document.getElementById("artist-genre");
const artistNetWorth = document.getElementById("artist-net-worth");
const artistDescription = document.getElementById("artist-description");

// ----------------------------CLOUD----------------------------
//
// - When the user clicks "submit" in the add new artist modal,
// declare an object which is filled with the values of the inputs.
//
// - Use the artists array length to determine the new ID
//
// - Push the new artist to the artists array.
//
// - Refresh the list of artists on the screen.

submitArtistBtn.onclick = function() {
  let newArtist = {
    id: artists.length,
    name: artistName.value,
    genre: artistGenre.value,
    image_url: artistImgUrl.value,
    description: artistDescription.value,
    net_worth: artistNetWorth.value
  }
  artists.push(newArtist);
  generateButtons();
  closeArtistModal();
  console.log(artists);

  // show all artists after adding a new one
  showAllArtists();

  // check if the user has filtered
  // if (artistFound == true) {
  // we'll pick up on this at a later point
  // }
}
