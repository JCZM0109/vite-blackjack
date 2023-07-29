
/**
 * Function that gets the value of a card based on the string.
 * @param {String} newCard 
 * @returns {Number} returns the card value
 */

export const cardValue = (newCard) => {
    let points = 0;
    const value = newCard.substring(0, newCard.length - 1);
    // console.log(value); 
    // if (isNaN(value)) { //Verificar si la variable es numero, si no es da TRUE
    //     points = (value === 'A') ? 11 : 10; 
    // } else {
    //     points = Number(value);
    // };
    return points = (isNaN(value)) ? ((value === 'A') ? 11 : 10) : Number(value); //mismo código de arriba pero más corto y eficiente.
  
  }