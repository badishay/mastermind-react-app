# mastermind-react-app
## Description

This is a version mastermind game application to render a game in React.

## game instrutions
This is a version of the board game
”Mastermind” (https://en.wikipedia.org/wiki/Mastermind_(board_game)).

The goal of the game is for the player to correctly guess the identical
combination of colored pegs chosen by the computer opponent (the same
colors in the same order).

The player has 10 attempts to guess the correct combination.
For each guess, the player receives a result consisting of 3 colors
according to the guess he made:
1. When the player guesses the correct color in the correct position
they receive a “Direct Hit” (Black).
2. When the player guesses the correct color but in the wrong
position they receive a “Hit” (White).
3. When the player guesses a color that does not appear in the
combination they receive a “Miss” (Red).

## implementetion
Using React framework by implement components:
- 'Main' component using routing to switch between pages
- 'Game' component holds the game data and provides informations to the components benith.
this component also manage the game logical part.
- 'Attempts' componnent rendering list of 10 Attempt componnent
- 'Attempt' componnent get information from above componnents and render the game flow

## Installation
- Clone the repo in your terminal by clicking the _green_ clone or download button at the top right and copyin the url
- In your terminal, type ```git clone URL```
  - replace URL with the url you copied
  - hit enter
- This will copy all the files from this repo down to your computer
- In your terminal, cd into the directory you just created
- Type ```npm install``` to install all dependencies
- Last, type ```npm start``` to run the app locally.

