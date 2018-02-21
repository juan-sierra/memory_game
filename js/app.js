let cards = document.getElementsByClassName("card");

let deck = document.getElementsByClassName("deck");

let container = document.getElementsByClassName("container");

let shuffledArr = [];

let tracker = [];

let matched = [];

let counter = 1;

let cardOne, cardTwo;

// timer
// https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript
let minutes = document.getElementsByClassName("minutes");
let seconds = document.getElementsByClassName("seconds");

let totalSeconds = 0;

minutes = minutes[0];
seconds = seconds[0];

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

setInterval(setTime, 1000);

// push card elements to an empty array
function loopCards(card) {
  for (let i = 0; i < card.length; i++) {
    shuffledArr.push(card[i]);
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
    // render shuffled cards back to deck
    function render(el) {
      deck = deck[0];
      for (let i = 0; i < el.length; i++) {
        deck.appendChild(el[i]);
        el[i].addEventListener("click", function(ev) {
          el[i].classList.add("open", "show");
          el[i].classList.add("open", "show");
          if (tracker.length <= counter) {
            tracker.push(el[i]);
          }
        });
      }
      function match() {}
      return tracker;
    }
    return render(array);
  }
  return shuffle(shuffledArr);
}

loopCards(cards);
