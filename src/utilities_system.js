import { updatePlayer } from "./actions";
import { getNextPlayer } from "./utilities";

export const initializePlayerSet = players => {
  players[0].active = true;
  players[0].current = 0;
  players[0].total = 0;
  updatePlayer(players[0], 0);

  for (let i = 1; i < players.length; i++) {
    players[i].active = false;
    players[i].current = 0;
    players[i].total = 0;
    updatePlayer(players[i], 0);
  }
  return players;
};
export const setHolder = (players, index) => {
    let player = players[index];
    //Set the player to non active
    player.total += player.current;
    player.current = 0;
    player.active = false;
    //Set the next player to active
    index = getNextPlayer(players, index);
    player = players[index];
    player.active = true;
}
export const setPlayerTotalLossScore = (player, players, index) => {
  let message = `Player ${index +
    1} : You rolled two 1's and lose all your points.`;
  player.current = 0;
  player.total = 0;
  player.active = false;
  updatePlayer(player, index);
  
  //Set the active player
  index = getNextPlayer(
    players,
    index
  );
  player = players[index];
  player.active = true;
  updatePlayer(player, index);
  return message;
}
export const setPlayerLossScore = (player, players, index) => {
  let message = `Player ${index + 1} : You rolled a 1 and lose your score.`;
  player.current = 0;
  player.active = false;
  updatePlayer(player, index);

  //Set the active player
  index = getNextPlayer(players, index);
  player = players[index];
  player.active = true;
  updatePlayer(player, index);

  return message;
};
