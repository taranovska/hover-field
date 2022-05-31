import React from "react";
import { Alert } from "react-bootstrap";

export default function HoverSquares({ hoveredColRowCell }) {
  return (
    hoveredColRowCell.length > 0 && (
      <div>
        <h3>Hover Squares</h3>
        <div>
          {hoveredColRowCell.map((variant) => (
            <Alert key={variant} variant="warning">
              {variant}
            </Alert>
          ))}
        </div>
      </div>
    )
  );
}
