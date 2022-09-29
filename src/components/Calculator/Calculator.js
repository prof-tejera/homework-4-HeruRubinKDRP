import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";
import { useState } from "react";
import styled from "styled-components";;

const Calculator = () => {
  /** TODO: Here is where you are going to keep track of calculator state */
const [calcDisplay, setCalcState]=useState(0);

  /** TODO: what happens when I click a number? */
  const handleNumberClick = (value) => {
    setCalcState(Number(calcDisplay.toString() + value.toString()))
  };

  /** TODO: what happens when I click an operation? */
  const handleOperationClick = () => {};

  const getNumberKeys =()=>{
    let numberKeys = [];
    for(let i=0; i < 9; i++){
      numberKeys.push(
        <Number value={i} onClick={()=>handleNumberClick(i)} />
      )
    }

    return <>{numberKeys}</>
  }

  return (
    <div>
      <Screen value={"123"} />
      <div style={{ display: "flex" }}>
        <div className="number-keys">
          {getNumberKeys()}
        </div>
        <div style={{ paddingLeft: 10 }}>
          <Operation value="+" onClick={handleOperationClick} />
          <Operation value="/" onClick={handleOperationClick} />
          <Operation value="x" onClick={handleOperationClick} />
          <Operation value="-" onClick={handleOperationClick} />
          <Operation value="=" onClick={handleOperationClick} />
          <Operation value="clear" onClick={handleOperationClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
