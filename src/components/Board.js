import React from "react";
import Tile from "./Tile";

const Board = props => {
  return (
    <div>
      {props.board.split("").map(item => (
        <Tile value={item} />
      ))}
    </div>
  );
};

export default Board;
