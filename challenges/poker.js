/*
 * Build a poker checking function that takes in two arrays of five elements,
 * where each array represents a player's hand and
 * each element represents a card from a standard deck of cards:
 * 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
 *
 * The function should return either "Player 1 wins",
 * "Player 2 wins", or "Draw" using the following ranking system:
 *
 * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card
 * Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
 *
 * If two players have the same rank, then player with the highest card wins.
 * Example: [4, 4, 4, 2, 14] beats [8, 8, 8, 4, 5] because the first hand has the highest card.
 *
 * Clearly real-world poker has more complex rules for tied ranks, but we want you
 * to focus on overall architecture rather than edge cases. Have fun!
 *
 * BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
 * BONUS2: Create a deck of cards function that generates two random hands for you.
 */
function poker (hand1, hand2) {
  function checkStraight (hand) {
    const checkHand = hand.slice().sort();
    for (let i = 1; i <= 4; i++) {
      if (+checkHand[i] !== +checkHand[i - 1] + 1) { return false; }
    }
    return true;
  }

  function rankHand (hand) {
    const numCards = {};
    hand.forEach(function (card) {
      numCards[card] = numCards[card] + 1 || 1;
    });
    console.log(numCards);

    const combos = Object.values(numCards);

    // if 4 of a kind -> 6
    if (combos.includes(4)) return 6;

    // if full house -> 5
    if (combos.includes(3) && combos.includes(2)) return 5;

    // if straight -> 4
    if (checkStraight(Object.keys(numCards))) { return 4; }

    // if 3 of a kind -> 3
    if (combos.includes(3)) { return 3; }

    // if 2 pair -> 2
    if (combos.filter((num) => num === 2).length === 2) { return 2; }

    // if 1 pair -> 1
    if (combos.includes(2)) { return 1; }

    // if nothing -> 0
    return 0;
  }

  let rank1 = rankHand(hand1);
  let rank2 = rankHand(hand2);

  if (rank1 === rank2) {
    rank1 = Math.max(...hand1);
    rank2 = Math.max(...hand2);
  }

  if (rank1 > rank2) {
    return 'Player 1 wins';
  }

  if (rank1 < rank2) {
    return 'Player 2 wins';
  }

  return 'Draw';
}

// console.log(poker([4, 4, 4, 2, 14], [8, 8, 8, 4, 5]));

module.exports = poker;
