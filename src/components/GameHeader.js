import React from "react";
import store from "../store";
import { removePlayer } from "../actions";
import { initializePlayerSet } from "../utilities_system";
import {
  faRocket,
  faPlusCircle,
  faMinusCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isStillInitialized } from "../utilities";

class GameHeader extends React.Component {
  reStart = () => {
    const players = initializePlayerSet(this.props.players);
    this.props.reStart(players);
  };
  render() {
    const classDef = "displayplayer sbtxtsz_mini";
    const classDefActive = "displayplayer sbtxtsz_mini live";
    return (
      <div>
        <div className="panelitem headertop">
          {this.props.players.length > 2 &&
            isStillInitialized(this.props.players) && (
              <button
                href=""
                className="btn"
                onClick={() => {
                  let players = this.props.players.slice(0, -1);
                  store.dispatch(removePlayer(players));
                  this.props.removePlayer();
                }}
                title="Remove a player!"
              >
                <FontAwesomeIcon icon={faMinusCircle} className="svgicon" />
              </button>
            )}

          <button
            href=""
            className="btn"
            onClick={() => {
              this.reStart();
            }}
            title="Start again!"
          >
            <FontAwesomeIcon icon={faRocket} className="svgicon" />
          </button>

          {isStillInitialized(this.props.players) && (
            <button
              href=""
              className="btn"
              onClick={() => {
                this.props.addPlayer();
              }}
              title="Add a player!"
            >
              <FontAwesomeIcon icon={faPlusCircle} className="svgicon" />
            </button>
          )}
        </div>
        <div className="panelitem">
          {this.props.players.map((player, i) => (
            <span className={player.active ? classDefActive : classDef} key={i}>
              Player {i + 1} [{player.current}] [{player.total}]
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default GameHeader;
