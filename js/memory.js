// @ts-check

function setup() {
    let homebar = document.querySelector('home-bar');
    if (homebar) {
        homebar.setAttribute("menu",
            `<i class="material-icons">menu</i>
            <ul>
            <li>hjem
            <li>easy
            <li>normal
            <li>hard
          </ul>
        `)
        homebar.addEventListener("menu", menuHandler);
    }
    
   
    function menuHandler(e) {
        let info = homebar.info;
        let text = info.target.innerHTML.trim();
        if (text) {
            location.href = text + ".html";
        }
    }
}

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}

function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

(function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.ceil(Math.random() * 12);
    card.style.order = ramdomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
