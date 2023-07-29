import { newDeck, hit, showCard, pcTurn, getScore } from './usecases';


let deck = [];
const types = ['C', 'D', 'H', 'S'], letters = ['A', 'J', 'Q', 'K'];
let score = [];

///REFERENCIAS DEL HTML
const btnHit = document.querySelector("#btnHit"),
      btnNew = document.querySelector("#btnNew"),
      btnStd = document.querySelector("#btnStd");
const scoreBoard = document.querySelectorAll('small'),
      divCards = document.querySelectorAll('.divCards');

const startNewGame = (numPlayers = 2) => {
  deck = newDeck(types, letters);
  console.log(deck);
  score = [];
  for (let i = 0; i < numPlayers; i++) {
    score.push(0);
    divCards[i].innerHTML = '';
    scoreBoard[i].innerText = 0; //scoreBoard.forEach(elem => elem.innerText = '0') otra forma de hacerlo pero tendría que usar otras lineas, basicamente forEach recorre el arreglo y corre lo que se ponga dentro de la función con/para cada elemento.
  };

  btnHit.disabled = false;
  btnStd.disabled = false;
};


btnHit.addEventListener('click', () => {

  const card = hit(deck);
  const playerPoints = getScore(scoreBoard, score, 0, card);

  showCard(divCards, 0, card);


  if (playerPoints > 21) {
    console.warn("You lost the game, loser!");
    btnHit.disabled = true;
    btnStd.disabled = true;
    pcTurn(scoreBoard, divCards, deck, score, playerPoints);
  } else if (playerPoints === 21) {
    console.warn('BlaaaaackJack!');
    btnHit.disabled = true;
    btnStd.disabled = true;
    pcTurn(scoreBoard, divCards, deck, score, playerPoints);
  };

})//FUncion que se manda como argumento se denomina Callback

btnNew.addEventListener('click', () => {
  startNewGame();
  // playerPoints = 0;
  // pcPoints = 0;

})

btnStd.addEventListener('click', () => {
  btnHit.disabled = true;
  btnStd.disabled = true;

  pcTurn(scoreBoard, divCards, deck, score, score[0]);
})









