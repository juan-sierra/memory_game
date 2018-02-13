let cardEl = document.getElementsByClassName("card");
let deck = document.getElementsByClassName("deck");
let reset = document.getElementsByClassName("restart");

let newArr = [];

// loop through cardEl
// then push to newArr
function pushToArr(cards, emptyArr) {
  for (let i = 0; i < cards.length; i++) {
    emptyArr.push(cards[i]);
  }

  // shuffling algorithm
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

    // Append shuffled items to page
    function insertDeck(cardItems, container) {
      for (let i = 0; i < cardItems.length; i++) {
        container.appendChild(cardItems[i]);
      }
    }
    return insertDeck(array, deck[0]);
  }
  return shuffle(emptyArr);
}

// reset game / refresh page
function restart(btn) {
  btn.addEventListener(
    "click",
    function() {
      window.location.reload();
    },
    false
  );
}

restart(reset[0]);

pushToArr(cardEl, newArr);
