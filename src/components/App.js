import React from "react";
import Board from "./Board";
import sudoku from "sudoku-umd";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      initialBoard: "", //staly element, sluzy do wygenerowania i restartu
      board: "" //sluzy do wprowadzania zmian przez uzytkownika
    };
  }

  start() {
    const sudokuBoard = sudoku.generate("hard");

    this.setState({
      board: sudokuBoard,
      initialBoard: sudokuBoard
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Sudoku</h1>
        <Board board={this.state.board} />
        <div className="buttons">
          <button>Check</button>
          <button onClick={this.start.bind(this)}>New Game</button>
          <button>Solve</button>
          <button>Restart</button>
        </div>
      </div>
    );
  }
}

export default App;
