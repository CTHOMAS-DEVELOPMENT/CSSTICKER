export const addPlayer = player => ({
  type: "ADD PLAYER",
  payload: player
});
export const removePlayer = playerSet => ({
  type: "REMOVE PLAYER",
  payload: playerSet
});
export const updatePlayer = (player, index) => ({
  type: "UPDATE PLAYER",
  payload: player,
  index: index
});
export const updateDice = dice => ({
  type: "UPDATE DICE",
  payload: dice
});
