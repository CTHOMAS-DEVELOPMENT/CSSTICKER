import React from "react";
import { connect } from "react-redux";
import GameHeader from "./GameHeader";
import Dice from "./Dice";
import GameFooter from "./GameFooter";
import store from "../store";
import { updateDice, updatePlayer, addPlayer } from "../actions";
import { getCurrentPlayer, getNextPlayer, getRoleResult } from "../utilities";
import {
  initializePlayerSet,
  setHolder,
  setPlayerLossScore,
  setPlayerTotalLossScore
} from "../utilities_system";
import { WINNINGSCORE } from "../constants";
class ConnectedMain extends React.Component {
  constructor(props) {
    super();
    //Initialise state
    this.state = {
      players: props.players,
      dice: props.dice,
      message: "Start a new game or add more players."
    };
  }
  reStart = players => {
    this.setState(players);
  };

  updatePlayer = (r1, r2) => {
    let currentPlayerIndex = getCurrentPlayer(this.state.players);
    let obj = this.state.players[currentPlayerIndex];
    let current = r1 + r2;
    let result = getRoleResult(r1, r2, obj.total, obj.current);
    switch (result) {
      case "SNAKE EYES":
        //Update the current player with a current and total score of zero
		this.state.message = setPlayerTotalLossScore(
          obj,
          this.state.players,
          currentPlayerIndex
        );
        break;
      case "LOSE SCORE":
        //Update the current player with a current score of zero
        this.state.message = setPlayerLossScore(
          obj,
          this.state.players,
          currentPlayerIndex
        );
        break;
      case "WINNER":
        //Restart
        const players = initializePlayerSet(this.state.players);
        this.reStart(players);
        //Winning message
        this.state.message = `Winner: Player ${currentPlayerIndex +
          1} : You reached ${WINNINGSCORE} first!`;
        break;
      default:
        //If no other match aggregate the current score of the player
        obj.current += current;
        this.state.message = "";
        updatePlayer(obj, currentPlayerIndex);
    }
  };
  hold = () => {
    //Get the current player
    let currentPlayerIndex = getCurrentPlayer(this.state.players);
	setHolder(this.state.players, currentPlayerIndex);
	this.setState({ dice: [0, 0] });
  };
  role = () => {
    let r1 = Math.floor(Math.random() * 6) + 1;
    let r2 = Math.floor(Math.random() * 6) + 1;

    updateDice({ dice: [r1, r2] });
    this.updatePlayer(r1, r2);

    //On setState all other changes to the store for just dice are rendered
    this.setState({ dice: [r1, r2] });
  };
  //Function called by the Header to set local state
  removePlayer = () => {
    this.setState({ players: store.getState().players });
  };
  addPlayer = () => {
    store.dispatch(
      addPlayer({
        current: 0,
        total: 0,
        active: false
      })
    );
    this.setState({ players: store.getState().players });
  };
  render() {
    return (
      <div className="outer-div">
        <div className="inner-div">
          <GameHeader
            addPlayer={this.addPlayer}
            removePlayer={this.removePlayer}
            players={this.state.players}
            reStart={this.reStart}
          />
          <Dice dice1={this.state.dice[0]} dice2={this.state.dice[1]} />
          <GameFooter
            message={this.state.message}
            hold={this.hold}
            role={this.role}
            players={this.state.players}
          />
        </div>
      </div>
    );
  }
}
//Data shared between store and local state
const mapStateToProps = state => {
  return { players: state.players, dice: state.dice };
};

export default connect(mapStateToProps)(ConnectedMain);
