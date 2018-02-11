let cardEls = document.getElementsByClassName("card");
let deck = document.getElementsByClassName("deck");

let stars = document.getElementsByClassName("stars");
let icons = document.getElementsByClassName("fa");

let cardArr = [];

function loopArr(cards, arr) {
  for (let i = 0; i < cards.length; i++) {
    arr.push(cards[i]);
  }
  function shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    function appendTo(cardList, container) {
      for (let i = 0; i < cardList.length; i++) {
        cardEls = cardList;
        container[0].appendChild(cardEls[i]);
        cardEls[i].addEventListener(
          "click",
          function() {
            cardEls[i].classList.toggle("open");
            cardEls[i].classList.toggle("show");
          },
          false
        );
      }
    }
    return appendTo(array, deck);
  }
  return shuffle(arr);
}

loopArr(cardEls, cardArr);
