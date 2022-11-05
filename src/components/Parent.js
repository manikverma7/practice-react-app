import React, { useCallback, useState } from "react";
import Child from "./Child";

function Parent() {
  const [counterOne, setcounterOne] = useState(0);
  const [countertwo, setcountertwo] = useState([]);

  const IncrementOne = () => {
    setcounterOne(counterOne + 1);
  };

  const fun = useCallback(() => {
    setcounterOne(countertwo + 1);
  }, [countertwo]);

  return (
    <div>
      <Child countertwo={countertwo} fun={fun} />
      <button onClick={IncrementOne}>Counter one-{counterOne}</button>
    </div>
  );
}

export default Parent;
