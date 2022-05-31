import React, { useEffect, useState } from "react";
import styles from "../styles/Cell.module.css";

const Cell = ({
  indexCol,
  indexRow,
  setHoveredColRowCell,
  hoveredColRowCell,
  toggleStartGame,
}) => {
  const [activeCell, setActiveCell] = useState(false);

  function changeBackgroundAndSetHoveredColRow(e) {
    setActiveCell((current) => !current);

    hoveredColRowCell.indexOf(e.target.dataset.text) === -1
      ? setHoveredColRowCell([...hoveredColRowCell, e.target.dataset.text])
      : setHoveredColRowCell([
          ...hoveredColRowCell.filter((el) => el !== e.target.dataset.text),
        ]);
  }

  useEffect(() => {
    setActiveCell(false);
  }, [toggleStartGame]);

  return (
    <td
      style={{
        background:
          hoveredColRowCell.length === 0
            ? "white"
            : activeCell
            ? "blue"
            : "white",
      }}
      key={indexCol}
      data-text={`row ${indexRow + 1}, col ${indexCol + 1}`}
      onMouseOver={changeBackgroundAndSetHoveredColRow}
      className={styles.cell}
    ></td>
  );
};

export default Cell;
