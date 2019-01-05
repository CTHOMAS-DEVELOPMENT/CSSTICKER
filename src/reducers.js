import { INITIALIZE } from "./constants";
const initialState = INITIALIZE;
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE DICE":
      return { ...state, dice: [...state.dice, action.payload] };
    case "ADD PLAYER":
      return { ...state, players: [...state.players, action.payload] };
    case "REMOVE PLAYER":
      return { ...state, players: action.payload };
    case "UPDATE PLAYER":
      return { ...state, players: [...state.players, action.payload] };
    default:
      return state;
  }
};
export default rootReducer;
