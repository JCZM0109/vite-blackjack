
import _ from 'underscore';

/**
 * creates a new card deck
 * @param {Array<String>} cardTypes 
 * @param {Array<String>} specialChar 
 * @returns {Array<String>} returns the deck
 */

export const newDeck = ( cardTypes, specialChar) => { //Function to create a new randomly arranged deck

    if (!cardTypes || cardTypes.length === 0) throw new Error('cardTypes is missing, must be a string array');

    let deck = [];
    for (let i = 2; i <= 10; i++) {
      for (let type of cardTypes) {
        deck.push(i + type);
      }
    }
    for (let letter of specialChar) {
      for (let type of cardTypes) {
        deck.push(letter + type);
      }
    }
  
    // console.log(deck);
  
    return _.shuffle(deck);
  };

  // export default newDeck; También se puede exportar así, por defecto, solo puede haber una; para importar sería import newDeck from archivo, sin corchetes