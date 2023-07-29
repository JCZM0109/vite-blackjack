import { getScore } from "./get-score";
import { showCard } from "./show-card";
import { hit } from './hit';


      
/**
 * Function that executes the PC turn logic and updates the page based on the current score
 * @param {HTMLElement} scoreBoard
 * @param {HTMLElement} divCards 
 * @param {Array<String>} deck 
 * @param {Array<Number>} score 
 * @param {Number} minPoints 
 */
export const pcTurn = (scoreBoard, divCards, deck = [], score, minPoints) => {

    if (!minPoints) throw new Error('Player points are necessary');
    

    let pcPoints;
    do {
      const pcCard = hit(deck);
      pcPoints = getScore( scoreBoard, score, score.length - 1, pcCard);
      showCard(divCards, score.length - 1, pcCard);
  
    } while ((pcPoints < minPoints) && (minPoints <= 21))

    setTimeout(() => {
        if (pcPoints === minPoints) {
          alert('Draaaaaaaaaaaaw');
        } else if (minPoints > 21) {
          alert('PC WINSSS');
        } else if (pcPoints > 21) {
          alert('YOU WIIIIIIN');
        } else if (pcPoints > minPoints) {
          alert('PC WINSSS');
        } else {
          alert('YOU WIIIIIIN');
        }
      }, 15);
  
  }