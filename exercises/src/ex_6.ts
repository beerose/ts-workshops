/**
 * Exercise 6: Optional Chaining
 */

/**
 * Optional chaining lets us write code where TypeScript can immediately stop running some expressions
 * if we run into a null or undefined.
 * There is the new `?.` operator for optional property accesses.
 *
 * For example foo?.bar() means call bar() if foo is defined. If not, stop and return undefined.
 *
 * Task 1: Convert the getGold into one line function: get rid of if statement and use optional chaining.
 */

type Player = {
  gameState?: {
    collectedItems?: {
      gold?: number;
    };
  };
};

const getGold = (player: Player) => {
  if (
    player &&
    player.gameState &&
    player.gameState.collectedItems &&
    player.gameState.collectedItems.gold
  ) {
    return player.gameState.collectedItems.gold;
  } else {
    return undefined;
  }
};

const getGold2 = (player: Player) => /** implement me! */;