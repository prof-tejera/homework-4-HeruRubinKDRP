import NumberKey from "../NumberKey/NumberKey";
import Operation from "../OperatorKey/Operation";
import Screen from "../Screen";
import { useState } from "react";
import { CalculatorStyled } from "./calculator-styled";



const Calculator = ({operators}) => {
  /** TODO: Here is where you are going to keep track of calculator state */
const [calcDisplay, setCalcDisplay]=useState("0");
const [lastCalcVal, setLastCalcVal] = useState("0");

const [activeCalcActivity, setActiveActivecalcActivity] = useState(false);
const [activeOperator, setActiveOperator] = useState(null)

  /** TODO: what happens when I click a number? */
  const handleNumberClick = (value) => {
    console.log("calcDisplay", value)
    setCalcDisplay(calcDisplay.toString() + value.toString())
  };

  /** TODO: what happens when I click an operation? */
  const handleOperationClick = async (operator) => {
    console.log("operator")
    switch (operator){
      case "clear":
        await setActiveOperator(null);
        await setLastCalcVal("0");
        await setCalcDisplay("0");
        break;

      case "+":
        await setActiveOperator("+");
        await setLastCalcVal(calcDisplay);
        await setCalcDisplay("0");
        break;

      case "-":
        await setActiveOperator("-");
        await setLastCalcVal(calcDisplay);
        await setCalcDisplay("0");
        break;

      case "/":
        await setActiveOperator("/");
        await setLastCalcVal(calcDisplay);
        await setCalcDisplay("0");
        break;

      case "=":
        console.log(Number(calcDisplay) , Number(lastCalcVal))
        switch (activeOperator){
          case "+":
            await setCalcDisplay( (Number(calcDisplay) + Number(lastCalcVal) ).toString() );
            break;
          case "-":
            await setCalcDisplay( ( Number(lastCalcVal) - Number(calcDisplay) ).toString() );
            break;
          case "*":
            await setCalcDisplay( (Number(calcDisplay) * Number(lastCalcVal) ).toString() );
            break;
          case "/":
            await setCalcDisplay( (Number(calcDisplay) / Number(lastCalcVal) ).toString() );
            break;

        }
        break;

      default:
        await handleOperationClick("clear");
    }
  };

  const getNumberKeys =()=>{
    let numberKeys = [];
    for(let i=9; i > 0; i--){
      numberKeys.push(
        <NumberKey
          key={i}
          value={i}
          onClick={()=>handleNumberClick(i)}
        />
      )
    }
    numberKeys.push(
      <NumberKey
        key={0}
        value={0}
        onClick={()=>handleNumberClick(0)}
        classes="zero-key"
      />
    )

    return <>{numberKeys}</>
  }

  const getOperatorKeys =()=>{

      let operatorBtns = []
      for(let i=0; i < operators.length; i++){
          operatorBtns.push(
            <Operation
              classes=""
              key={i}
              value={operators[i]}
              operatorAction={()=>handleOperationClick(operators[i])}
            />
          )
      }

      return operatorBtns;

  }

  return (
    <CalculatorStyled>
      <Screen value={calcDisplay} />
      <div className="primary-btn-container">
        <section className="number-keys-section">
          {getNumberKeys()}
        </section>
        <section className="operator-keys-section" style={{ paddingLeft: 10 }}>
          {getOperatorKeys()}
        </section>
      </div>
    </CalculatorStyled>
  );
};

export default Calculator;
