let container = document.getElementsByClassName("container");

container = container[0];

// modal component that shows up to ask user if they are ready to play
let startModal = document.createElement("section");
let modalHeader = document.createElement("h1");
let modalBtn = document.createElement("button");

modalHeader.innerHTML = "Are you ready to begin?";
modalBtn.innerHTML = "Yes, I'm ready";

startModal.classList.add("modal");
modalHeader.classList.add("modalHeader");
modalBtn.classList.add("modalBtn");

startModal.appendChild(modalHeader);
startModal.appendChild(modalBtn);

// score panel
let panel = document.getElementsByClassName("score-panel");
let starsUl = document.getElementsByClassName("stars");
let stars = document.getElementsByClassName("fa-star");
let moves = document.getElementsByClassName("moves");
panel = panel[0];
starsUl = starsUl[0];
stars = stars[0];
moves = moves[0];

// timer
let minutes = document.getElementsByClassName("minutes");
let seconds = document.getElementsByClassName("seconds");
minutes = minutes[0];
seconds = seconds[0];

let totalSeconds = 0;

// restart button
let restartBtn = document.getElementsByClassName("fa-repeat");
let restartInfo = document.createElement("p");
restartBtn = restartBtn[0];
restartInfo.classList.add("restartInfo");

restartInfo.innerHTML = "* All progress you've made, will be lost on restart";

// deck and cards
let cards = document.getElementsByClassName("card");
let deckUl = document.getElementsByClassName("deck");
let newCards = [];
deckUl = deckUl[0];

//  trackers
let moveTracker;
let cardTracker = [];
let matchedCards = [];

// push cards to emptyArr
function loopCards(card) {
  for (let i = 0; i < card.length; i++) {
    newCards.push(card[i]);
  }
  //   shuffling algorithm
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    // render shuffled cards to page
    function render(el) {
      for (let i = 0; i < el.length; i++) {
        deckUl.appendChild(el[i]);
        el[i].addEventListener("click", function(ev) {
          el[i].classList.add("open", "show");
          // push opened pairs to cardTracker
          if (cardTracker.length < 2) {
            cardTracker.push(el[i]);
          }
        });
      }
    }

    return render(array);
  }
  return shuffle(newCards);
}

// timer
function setTime() {
  totalSeconds++;
  seconds.innerHTML = pad(totalSeconds % 60);
  minutes.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  let valStr = val + "";
  if (valStr.length < 2) {
    return "0" + valStr;
  } else {
    return valStr;
  }
}

// add class for animation when window loads completely
window.addEventListener("load", function() {
  container.appendChild(startModal);
  startModal.classList.add("showModal");
});

// run game once button is clicked and hide modal
modalBtn.addEventListener("click", function() {
  if (true) {
    startModal.classList.remove("showModal");
    loopCards(cards);
    setInterval(setTime, 1000);
  }
});

// reset settings
restartBtn.addEventListener("click", function() {
  modalHeader.innerHTML = "Are you sure you want to restart?";
  modalBtn.innerHTML = "Yes, I'm sure";
  startModal.appendChild(modalHeader);
  startModal.appendChild(restartInfo);
  startModal.appendChild(modalBtn);
  container.appendChild(startModal);
  startModal.classList.add("showModal");

  modalBtn.onclick = function() {
    if (true) {
      startModal.classList.remove("showModal");
    }
  };
});
