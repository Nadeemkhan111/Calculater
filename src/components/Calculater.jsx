import React from "react";
import { useState } from "react";
import { Container, Screen, Prevoius, Current, Button } from "../style/Main";
const Calculater = () => {
  const [current, setCurrent] = useState("");
  const [prevoius, setPrevoius] = useState("");
  const [operations, setOperations] = useState("");

  const appendValueHnadler = (ele) => {
    const value = ele.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };

  const allclearHandle = () => {
    setCurrent("");
    setOperations("");
    setPrevoius("");
  };

  const deleteHandler = () => {
    setCurrent(String(current).slice(0, -1));
  };

  const choseOperationHandler = (ele) => {
    if (current === "") return;
    let value = compute();
    if (prevoius !== "") {
      setPrevoius(value);
    } else {
      setPrevoius(current);
    }
    setCurrent("");
    setOperations(ele.target.getAttribute("data"));
  };

  const compute = () => {
    let result;
    let previousNumber = parseFloat(prevoius);
    let currentNumber = parseFloat(current);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;
    switch (operations) {
      case "÷":
        result = previousNumber / currentNumber;
        break;
      case "*":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      default:
        return;
    }
    return result;
  };

  const equalsHandler = () => {
    let value = compute();
    if (value === undefined || value == null) return;
    setCurrent(value);
    setOperations("");
    setPrevoius("");
  };

  return (
    <div>
      <Container>
        <Screen>
          <Prevoius>
            {prevoius}
            {operations}
          </Prevoius>
          <Current>{current}</Current>
        </Screen>
        <Button onClick={allclearHandle} gridSpan={2} control>
          AC
        </Button>
        <Button onClick={deleteHandler}>DEL</Button>
        <Button operation data={"÷"} onClick={choseOperationHandler}>
          ÷
        </Button>
        <Button data={7} onClick={appendValueHnadler}>
          7
        </Button>
        <Button data={8} onClick={appendValueHnadler}>
          8
        </Button>
        <Button data={9} onClick={appendValueHnadler}>
          9
        </Button>
        <Button operation data={"*"} onClick={choseOperationHandler}>
          *
        </Button>
        <Button data={4} onClick={appendValueHnadler}>
          4
        </Button>
        <Button data={5} onClick={appendValueHnadler}>
          5
        </Button>
        <Button data={6} onClick={appendValueHnadler}>
          6
        </Button>
        <Button operation data={"+"} onClick={choseOperationHandler}>
          +
        </Button>
        <Button data={1} onClick={appendValueHnadler}>
          1
        </Button>
        <Button data={2} onClick={appendValueHnadler}>
          2
        </Button>
        <Button data={3} onClick={appendValueHnadler}>
          3
        </Button>
        <Button operation data={"-"} onClick={choseOperationHandler}>
          -
        </Button>
        <Button data={"."} decimal onClick={appendValueHnadler}>
          .
        </Button>
        <Button>0</Button>
        <Button gridSpan={2} equals onClick={equalsHandler}>
          =
        </Button>
      </Container>
    </div>
  );
};

export default Calculater;
