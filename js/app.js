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

// reset button
let resetBtn = document.getElementsByClassName("restart");
resetBtn = resetBtn[0];

resetBtn.addEventListener("click", function () {
  if (true) {
    window.location.reload(true);
  }
}, false);

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

let starArr = [];
let emptyStars = [];

// to prevent users from bugging out the game by clicking too fast
let wait = false;


// congrats modal
let modal = document.getElementsByClassName("modal");
modal = modal[0];

function matching(c) {
  for (let i = 0; i < c.length; i++) {


    deck.appendChild(c[i]);

    starArr.push(star[i]);

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
        if (moves == 10) {
          starArr[2].children[0].classList.add("fa-star-o");
          emptyStars.push(starArr[2]);
          starDeck.appendChild(starArr[2]);
        } else if (moves == 20) {
          starArr[1].children[0].classList.add("fa-star-o");
          emptyStars.push(starArr[1]);
          starDeck.appendChild(starArr[1]);
        } else if (moves == 25) {
          starArr[0].children.classList.add("fa-star-o");
          emptyStars.push(starArr[0]);
          starDeck.appendChild(starArr[0]);
        }
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
          openCards = [];
          if (matchedCards.length == 16) {
            let time = document.createElement('p');
            let finalRating = document.createElement('p');
            let starCount = 0;
            if (emptyStars.length == 2) {
              starCount = 0;
            } else if (emptyStars.length == 1) {
              starCount = 1;
            } else if (emptyStars.length == 0) {
              starCount = 2;
            } else {
              starCount = 3;
            }
            finalRating.innerHTML = `Final Rating: ${starCount}`;
            time.innerHTML = `It took you ${totalSeconds} seconds`;
            modal.appendChild(time);
            modal.appendChild(finalRating);
            modal.classList.add("showModal");
          }
        } else if (innerCardOne.classList[1] !== innerCardTwo.classList[1]) {
          wait = true;
          setTimeout(function () {
            cardOne.classList.remove("open", "show");
            cardTwo.classList.remove("open", "show");
            openCards = [];
            wait = false;
          }, 450);
        }
      }
    });

  }
}

shuffle(cardArr);
matching(cardArr);