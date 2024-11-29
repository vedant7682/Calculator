import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  // Handle button clicks
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Clear the display
  const clearInput = () => {
    setInput("");
  };

  // Calculate the result of the expression
  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); // Use eval cautiously, consider safer alternatives
    } catch (error) {
      setInput("Error");
    }
  };

  // Calculate percentage
  const calculatePercentage = () => {
    try {
      setInput((parseFloat(input) / 100).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  // Increment by 2
  const incrementBy2 = () => {
    try {
      setInput((parseFloat(input) + 2).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={calculatePercentage}>%</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={incrementBy2}>+2</button>
      </div>
    </div>
  );
}

export default App;
