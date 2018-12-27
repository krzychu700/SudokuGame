import React from "react";
import Board from "./Board";
import sudoku from "sudoku-umd";
import styles from "./App.module.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      initialBoard: "", //staly element, sluzy do wygenerowania i restartu
      board: "", //sluzy do wprowadzania zmian przez uzytkownika
      level: "easy"
    };
  }

  start() {
    const sudokuBoard = sudoku.generate(this.state.level);

    this.setState({
      board: sudokuBoard,
      initialBoard: sudokuBoard
    });
  }

  handleLevelChange = e => {
    this.setState({
      level: e.target.value
    });
  };

  restart = () => {
    this.setState({
      board: this.state.initialBoard
    });
  };

  solve() {
    const solution = sudoku.solve(this.state.initialBoard);
    this.setState({
      board: solution
    });
  }

  checkSolve() {
    const check = sudoku.solve(this.state.board);
    if (check) {
      alert("Jip, that's right");
    } else {
      alert("Wrong! Check again");
    }
  }

  handleChange = (index, value) => {
    if (value > 0 && value <= 9) {
      const board =
        this.state.board.slice(0, index) +
        value +
        this.state.board.slice(index + 1);

      this.setState({
        board: board
      });
    }
  };

  render() {
    return (
      <div className={styles.App}>
        <h1>Sudoku</h1>
        <Board
          board={this.state.board}
          initialBoard={this.state.initialBoard}
          generatedValue={this.state.initialBoard}
          handleChange={this.handleChange}
        />
        <div className={styles.buttons}>
          <label>
            <select
              value={this.state.level}
              onChange={this.handleLevelChange}
              className={styles.select}
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
              <option value="very-hard">very-hard</option>
              <option value="insane">insane</option>
              <option value="inhuman">inhuman</option>
            </select>
          </label>
          <button onClick={this.start.bind(this)}>New Game</button>
          <button onClick={this.checkSolve.bind(this)}>Check</button>
          <button onClick={this.solve.bind(this)}>Solve</button>
          <button onClick={this.restart}>Restart</button>
        </div>
      </div>
    );
  }
}

export default App;
