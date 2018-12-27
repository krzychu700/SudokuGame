import React from "react";
import styles from "./Tile.module.css";

const Tile = props => {
  let value = props.value;
  let isDisabled = null;
  let initialBoard = props.initialBoard.split("");

  if (props.value !== "." && initialBoard[props.index] !== ".") {
    isDisabled = "disabled";
  }

  if (props.value === ".") {
    value = "";
  }

  const isGenerated = props.value !== ".";
  const className = `${styles.tile} ${isGenerated ? styles.tileNumber : ""}`;
  return (
    <input
      className={className}
      type="number"
      min="1"
      max="9"
      maxLength="1"
      size="1"
      value={value}
      onChange={event => props.handleChange(props.index, event.target.value)}
      disabled={isDisabled}
    />
  );
};

export default Tile;
