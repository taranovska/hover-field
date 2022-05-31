import SelectField from "./components/SelectField";
import StartBtn from "./components/StartBtn";
import "bootstrap/dist/css/bootstrap.min.css";
import Field from "./components/Field";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HoverSquares from "./components/HoverSquares";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredColRowCell, setHoveredColRowCell] = useState([]);
  const [fieldSize, setFieldSize] = useState(null);
  const [selectedFieldSize, setSelectedFieldSize] = useState(null);
  const [toggleStartGame, setToggleStartGame] = useState(false);

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Row className="marginBottom">
            <Col xs={12} md={9} className="marginBottom">
              <SelectField
                setSelectedFieldSize={setSelectedFieldSize}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            </Col>
            <Col xs={12} md={3} className="centered">
              <StartBtn
                isLoading={isLoading}
                setFieldSize={setFieldSize}
                selectedFieldSize={selectedFieldSize}
                setHoveredColRowCell={setHoveredColRowCell}
                setToggleStartGame={setToggleStartGame}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Field
                fieldSize={fieldSize}
                hoveredColRowCell={hoveredColRowCell}
                setHoveredColRowCell={setHoveredColRowCell}
                toggleStartGame={toggleStartGame}
                setToggleStartGame={setToggleStartGame}
              />
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6}>
          <HoverSquares hoveredColRowCell={hoveredColRowCell} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
