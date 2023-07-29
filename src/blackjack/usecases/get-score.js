import { cardValue } from "./card-value";


/**
 * Function that calculates the score based on the turn and the current card
 * @param {HTMLElement} scoreBoard 
 * @param {Array<String>} score 
 * @param {Number} turn 
 * @param {String} crd 
 * @returns current score value for each turn
 */
export const getScore = ( scoreBoard, score, turn, crd) => {
    
    score[turn] = score[turn] + cardValue(crd);
    scoreBoard[turn].innerText = score[turn];
  
    return score[turn];
}