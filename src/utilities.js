//Utility functions that need no imports (Other than constants)

import { WINNINGSCORE } from "./constants";
export const getCurrentPlayer = players => {
  for (var i = 0; i < players.length; i++) {
    if (players[i].active) {
      return i;
    }
  }
  return 0;
};
export const getNextPlayer = (players, currentIndex) => {
  return currentIndex + 1 === players.length ? 0 : currentIndex + 1;
};
export const getRoleResult = (r1, r2, current, aggregate) => {
  //2 ones (Snake eyes) thrown
  if (r1 === 1 && r2 === 1) {
    return "SNAKE EYES";
  }
  //1 thrown
  if (r1 === 1 || r2 === 1) {
    return "LOSE SCORE";
  }
  //Winning score reached
  if (r1 + r2 + current + aggregate >= WINNINGSCORE) {
    return "WINNER";
  }
  return "AGGREGATE";
};
export const isStillInitialized = existingPlayers => {
  //Note: To be initialized, no player must hold any score and player 1 should be "active"
  let noScoreHeld = true;
  for (let i = 0; i < existingPlayers.length; i++) {
    if (existingPlayers[i].current !== 0 || existingPlayers[i].total !== 0) {
      noScoreHeld = false;
      break;
    }
  }

  return existingPlayers[0].active && noScoreHeld;
};
