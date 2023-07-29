
/**
 * Function that creates a new img element and appends it on the required Div (one for pc one for player)
 * @param {HTMLElement} divCards 
 * @param {Number} turn 
 * @param {String} crd 
 */
export const showCard = (divCards, turn, crd) => {

    if (!crd) throw new Error('The card is necessary');
    
    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${crd}.png`;
    imgCard.classList.add("card");
    divCards[turn].append(imgCard);
}