import React from "react";
import { Table } from "react-bootstrap";
import Cell from "./Cell";

export default function Field({
  fieldSize,
  hoveredColRowCell,
  toggleStartGame,
  setHoveredColRowCell,
  setToggleStartGame,
}) {
  return (
    <Table>
      <tbody>
        {Array.from({ length: fieldSize }).map((_, indexRow) => (
          <tr key={indexRow} className="d-flex justify-content-center">
            {Array.from({ length: fieldSize }).map((_, indexCol) => (
              <Cell
                key={indexCol}
                setHoveredColRowCell={setHoveredColRowCell}
                indexRow={indexRow}
                indexCol={indexCol}
                hoveredColRowCell={hoveredColRowCell}
                toggleStartGame={toggleStartGame}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
