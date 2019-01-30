import {
  ADDCRYPTOVALUES
} from "./constants";
const initialState = {
  cryptocurrencies: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDCRYPTOVALUES:
      //console.log("Reducer", action.payload)
      return { ...state, cryptocurrencies: [...state.cryptocurrencies, action.payload] }; 

    default:
      return state;
  }
};
export default rootReducer;
