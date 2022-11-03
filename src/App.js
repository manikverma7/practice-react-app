import "./App.css";
import React, { useState, useMemo } from "react";

function App() {
  const [counterOne, setcounterOne] = useState(0);
  const [counterTwo, setcounterTwo] = useState(0);

  const IncrementOne = () => {
    setcounterOne(counterOne + 1);
  };

  const IncrementTwo = () => {
    setcounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    console.warn("----");
    let i = 0;
    while (i < 500000000) {
      i++;
    }
    return counterOne % 2 == 0;
  }, [counterOne]);

  return (
    <div className="App">
      <button onClick={IncrementOne}>Counter one-{counterOne}</button>
      <br />
      <span>{isEven ? "Even" : "Odd"} </span>
      <br />
      <button onClick={IncrementTwo}>Counter two-{counterTwo}</button>
    </div>
  );
}

export default App;
