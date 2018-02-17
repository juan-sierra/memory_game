let cards = document.getElementsByClassName("card");

let deck = document.getElementsByClassName("deck");

let shuffledArr = [];

let tracker = [];

let cardOne, cardTwo;

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
        el[i].addEventListener("click", function() {
          el[i].classList.add("open", "show");
          tracker.push(el[i]);
          if (tracker[0] && tracker[1]) {
            cardOne = tracker[0].children[0];
            cardTwo = tracker[1].children[0];
            if (
              tracker[0].classList.contains("open") &&
              tracker[1].classList.contains("open")
            ) {
              if (
                cardOne.classList[1] != cardTwo.classList[1] &&
                cardTwo.classList[1] != cardOne.classList[1]
              ) {
                tracker[0].classList.remove("open", "show");
                tracker[1].classList.remove("open", "show");
              } else {
                tracker[0].classList.add("match");
                tracker[1].classList.add("match");
              }
            }
          }
        });
      }
    }
    return render(array);
  }
  return shuffle(shuffledArr);
}

loopCards(cards);
