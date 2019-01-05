### Install

Clone this repository and type 'npm install' in the root directory where the package.json file is located.

### Running

Type 'npm run dev-server' in the root directory where the package.json file.

The application will run at: http://localhost:8080/

In the project directory, you can run the [Pig game demo](http://painstaking-apples.surge.sh/) 

### Game Rules

1)The game requires two or more players.

2)It requires two 6 sided dice.

3)Each player in turn roles the dice counting up the numeric scores until either:

a.The Player decides to stop rolling  - in which case the user notes down the total they have accumulated from that turn and adds that to their overall score.

b.The Player rolls a 1. – They lose any points they accumulated for that round.

c.The Player rolls two 1’s (snake eyes) and then they lose their points from that round and any points they’ve accumulated from previous rounds. E.g. their score goes back to 0.

4)When any of the point 2 scenarios have happened play passes to the next player and the cycle repeats.

5)A winner is the first person to reach 100 points. 