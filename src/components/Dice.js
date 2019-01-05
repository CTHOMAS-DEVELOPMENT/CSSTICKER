import React from "react";

const Dice = props => {
  return (
    <div className="panelitem dicemiddle dicesize">
      <span
        className={`dice dice-${props.dice1}`}
        title={`Dice ${props.dice1}`}
      />
      <span
        className={`dice dice-${props.dice2}`}
        title={`Dice ${props.dice2}`}
      />
    </div>
  );
};

export default Dice;
