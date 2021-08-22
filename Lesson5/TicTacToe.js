let readline = require("readline-sync");

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }

  getMarker() {
    return this.marker;
  }
}

class Board {
  constructor() {
    this.reset();
  }

  //good idea to move this code to reset method. Makes it easy
  //to start a Board object and also reset it
  reset() {
    this.squares = {}
    for (let counter = 1; counter <= 9; ++counter) {
      this.squares[String(counter)] = new Square();
    }
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  }

  getUnusedSquaresPrettyFormat(midItemSep = ',', lastItemExtraSep = 'or') {
    let unusedSquares = this.unusedSquares();
    
    if (unusedSquares.length <= 1) {
      return String(String(unusedSquares));
    } else if (unusedSquares.length === 2) {
      return unusedSquares.join(' ' + lastItemExtraSep + ' ');
    } else {
      return (unusedSquares.slice(0, unusedSquares.length - 1).join(midItemSep + ' ') +
              midItemSep + ' ' + lastItemExtraSep + ' ' + unusedSquares[unusedSquares.length - 1]);
    }
  }

  getRandOpenSquare() {
    let randomIndex = Math.floor(Math.random() * this.unusedSquares().length);
    return this.unusedSquares()[randomIndex];
  }

  getSelMarkerPositionsAscSort(marker) {
    let userMarkers = Object.keys(this.squares).filter(squareNum => {
      return this.squares[squareNum].getMarker() === marker;
    })

    return userMarkers.sort((a, b) => Number(a) - Number(b)).join('');
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }

  displayWithClear() {
    console.clear();
    console.log("");
    console.log("");
    this.display();
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  static POSSIBLE_WINNING_ROWS = [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ];

  //better to put it here over board class
  static DANGEROUS_COMB = { };

  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.scores = { "HUMAN" : 0, "COMPUTER": 0 };
  }

  updateScore() {
    if (this.isWinner(this.human)) {
      this.scores["HUMAN"] += 1
    } else if (this.isWinner(this.computer)) {
      this.scores["COMPUTER"] += 1;
    }
  }

  displayScore() {
    console.log("Current Scores are as Follows: ")
    Object.keys(this.scores).forEach(playerName => {
      console.log(`${playerName}: ${this.scores[playerName]}`);
    })
    console.log("");
  }

  getMatchWinner() {
    return Object.keys(this.scores).find(playerName => this.scores[playerName] >= 3);
  }

  getDangerousSquareCombination() {
    let combination = [[0, 1], [0, 2], [1, 2]];
     TTTGame.POSSIBLE_WINNING_ROWS.forEach((line) => {
      TTTGame.DANGEROUS_COMB[line.join('')] = combination.map((comb) => String(line[comb[0]]) + String(line[comb[1]]));
     })
  }

  play() {
    this.getDangerousSquareCombination();
    this.displayWelcomeMessage();
    while (true) {
      this.playOneGame();
      let matchWinner = this.getMatchWinner();

      if (matchWinner) {
        console.log(`${matchWinner} has won 3 matches. The match is now done`);
        break;
      }

      if (!this.playAgain()) break;
      console.log("Let's play again!");
    }
    this.displayGoodbyeMessage();
  }

  playOneGame() {
    this.board.reset();
    this.board.display();
    while (true) {
      this.humanMoves();
      if (this.gameOver()) break;

      this.computerMoves();
      if (this.gameOver()) break;

      this.board.displayWithClear();
    }

    this.board.displayWithClear();
    this.updateScore();
    this.displayResults();
  }

  //great implementation
  playAgain() {
    let answer;
    while (true) {
      answer = readline.question("Play again (y/n)? ").toLowerCase();

      if (["y", "n"].includes(answer)) break;

      console.log("Sorry, that's not a vlaid choice.");
      console.log("");
    }

    console.clear();
    return answer === "y";
  }


  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
    console.log("");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log("HUMAN won the game");
    } else if (this.isWinner(this.computer)) {
      console.log("COMPUTER won the game");
    } else {
      console.log("A tie game. How boring.");
    }
    console.log(" ");
    this.displayScore();
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${this.board.getUnusedSquaresPrettyFormat()}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let playerSquares = this.board.getSelMarkerPositionsAscSort(this.human.getMarker()); //use human's method to get market not SQUARE.HUMAN_MARKER
    let computerSquares = this.board.getSelMarkerPositionsAscSort(this.computer.getMarker());
    //play offense/defense or use square #5 or play randomly
    let squareToMark = this.getCriticalSquare(playerSquares, computerSquares) ||
                       (this.board.unusedSquares().includes('5') ? '5' : undefined) ||
                       this.board.getRandOpenSquare()

    this.board.markSquareAt(squareToMark, this.computer.getMarker())
  }

  getCriticalSquare(playerSquares, computerSquares) {
    let compWinLine = this.getPotentialWinningLine(computerSquares, playerSquares);
    let playerWinLine = this.getPotentialWinningLine(playerSquares, computerSquares);

    if (compWinLine) {
      return this.getCompWinSquare(compWinLine, computerSquares);
    } else if (playerWinLine) {
      return this.getCompDefSquare(playerWinLine, playerSquares);
    } else {
      return undefined;
    }

  }

  getPotentialWinningLine(wantedSquares, unwantedSquares) {
    let potnWinLine = Object.keys(TTTGame.DANGEROUS_COMB).find((winningLine) => {
      let curntDangCombs = TTTGame.DANGEROUS_COMB[winningLine];
      let isUnwantedMarkersPresent = unwantedSquares.split('').some((square => winningLine.includes(square)));
      let isTwoWantedMarkersPresent = curntDangCombs.some(comb => {
        return comb.split('').every(squareNum => wantedSquares.includes(squareNum));
      });
      return !isUnwantedMarkersPresent && isTwoWantedMarkersPresent;
    });
    return potnWinLine;
  }

  getCompWinSquare(winningLine, computerSquares) {
    return winningLine.split('').find((square) => !(computerSquares.includes(square)));
  }

  getCompDefSquare(winningLine, playerSquares) {
    return winningLine.split('').find((square) => !(playerSquares.includes(square)));
  }


  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }
}


let game = new TTTGame();
game.play();