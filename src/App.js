import "./App.css";
import React, { useState, useMemo } from "react";
import UseMemo from "./components/UseMemo";
import Parent from "./components/Parent";

function App() {
  return (
    <div className="App">
      <UseMemo />
      <hr />
      <Parent />
    </div>
  );
}

export default App;
