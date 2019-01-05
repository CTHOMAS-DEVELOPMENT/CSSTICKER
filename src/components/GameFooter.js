import React from "react";
import {
  faDice,
  faHandPaper,
  faSyncAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCurrentPlayer } from "../utilities";
const GameFooter = props => {
  //Find current player
  let currentPlayerIndex = getCurrentPlayer(props.players);
  const player = props.players[currentPlayerIndex];
  //if current score of player is 0 set state to 0 for hold available
  const divStyle = {
    color: "yellow",
    fontSize: "3em"
  };
  return (
    <div>
      <div className="panelitem footerbottom">
        <div className="wrapper">
          <div className="box b">
            <button
              className="btn"
              title="Roll the dice"
              onClick={() => {
                props.role();
              }}
            >
              <FontAwesomeIcon icon={faSyncAlt} className="svgicon" />
              <FontAwesomeIcon icon={faDice} className="svgicon iconstatus" />
            </button>

            {player.current !== 0 && (
              <button
                className="btn"
                title="Hold"
                onClick={() => {
                  props.hold();
                }}
              >
                <FontAwesomeIcon icon={faHandPaper} className="svgicon" />
              </button>
            )}
          </div>
        </div>
        <div className="box d sbtxtsz_mini">
          {props.message ? props.message : ""}
        </div>
      </div>
    </div>
  );
};

export default GameFooter;
