
/**
 * function to ask for a new card
 * @param {Array<String>} nDeck 
 * @returns {string} returns the last card on the deck
 */

export const hit = (nDeck) => (nDeck.length == 0) ? "There are no cards left, partner!" : nDeck.pop();