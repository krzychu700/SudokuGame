import React from "react";
import Tile from "./Tile";
import styles from "./Board.module.css";

const Board = props => {
  const isGenerated = props.initialBoard;
  return (
    <div className={isGenerated ? styles.board : ""}>
      {props.board.split("").map((item, index) => (
        <Tile
          initialBoard={props.initialBoard}
          key={index}
          index={index}
          value={item}
          handleChange={props.handleChange}
        />
      ))}
      <div className={isGenerated ? styles.boardLineHorizontalOne : ""} />
      <div className={isGenerated ? styles.boardLineHorizontalTwo : ""} />
      <div className={isGenerated ? styles.boardLineVerticalOne : ""} />
      <div className={isGenerated ? styles.boardLineVerticalTwo : ""} />
    </div>
  );
};

export default Board;
