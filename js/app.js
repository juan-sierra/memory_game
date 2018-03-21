/* ----------- timer ----------- */
let minutes = document.getElementsByClassName("minutes");
minutes = minutes[0];
let seconds = document.getElementsByClassName("seconds");
seconds = seconds[0];
let totalSeconds = 0;
setInterval(setTime, 1000);

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
/* ----------- timer ----------- */

/* ----------- card component ----------- */
let cards = document.getElementsByClassName("card");


let cardArr = Array.from(cards);
let openCards = [];
let matchedCards = [];


// shuffling algorithm
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
let deck = document.getElementsByClassName("deck");
deck = deck[0];
let cardOne, cardTwo;
let innerCardOne, innerCardTwo;
let moves = 0;
let movesEl = document.getElementsByClassName("moves");
movesEl = movesEl[0];

let rating = 3;

let starDeck = document.getElementsByClassName("stars");
starDeck = starDeck[0];

let star = starDeck.children;

// to prevent users from bugging out the game by clicking too fast
let wait = false;

function matching(c) {
  for (let i = 0; i < c.length; i++) {


    deck.appendChild(c[i]);

    if (c[i].classList.contains("match")) {
      openCards = [];
    }

    c[i].addEventListener("click", function () {

      if (wait) {
        return;
      }

      c[i].classList.add("open", "show");
      openCards.push(c[i]);

      if (openCards.length < 1) {
        return;
      }
      if (openCards[0] && openCards[1]) {
        moves++;
        cardOne = openCards[0];
        cardTwo = openCards[1];
        innerCardOne = cardOne.children[0];
        innerCardTwo = cardTwo.children[0];
        movesEl.innerHTML = moves;
        if (cardOne == cardTwo) {
          openCards = [];
          cardOne.classList.remove("open", "show");
          cardTwo.classList.remove("open", "show");
          return;
        }
        if (innerCardOne.classList[1] == innerCardTwo.classList[1]) {
          cardOne.classList.add("match");
          cardTwo.classList.add("match");
          matchedCards.push(cardOne, cardTwo);
          console.log(matchedCards);
          openCards = [];
        } else if (innerCardOne.classList[1] !== innerCardTwo.classList[1]) {
          wait = true;
          setTimeout(function () {
            cardOne.classList.remove("open", "show");
            cardTwo.classList.remove("open", "show");
            openCards = [];
            wait = false;
          }, 450);
        }
        if (matchedCards.length == 16) {
          console.log('all cards have been matched');
        }
      }
    });

  }
}

shuffle(cardArr);
matching(cardArr);