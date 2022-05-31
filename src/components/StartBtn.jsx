import React from "react";
import Button from "react-bootstrap/Button";
import styles from "../styles/StartBtn.module.css";

const StartBtn = ({
  setFieldSize,
  selectedFieldSize,
  setHoveredColRowCell,
  setToggleStartGame,
  isLoading,
}) => {
  return (
    !isLoading && (
      <div>
        <Button
          variant="primary"
          className={styles.startBtn}
          onClick={(e) => {
            setHoveredColRowCell([]);
            setFieldSize(selectedFieldSize);
            setToggleStartGame((current) => !current);
          }}
        >
          start
        </Button>
      </div>
    )
  );
};

export default StartBtn;
