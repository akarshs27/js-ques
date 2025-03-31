import { useMemo, useState } from "react";
import useCustomMemo from "../useCustomMemo";
import "./styles.css";

import { useRef } from "react";

// Here on clicking of decrement counter, squaredCounter1 was getting called. 
// Memoized it such that it will only be called when state of counter 1 changes.

const useCustomMemo = (cb, deps) => {
  const memoizedRef = useRef(null);

  function areEqual(prevDeps, nextDeps) {
    if (prevDeps === null) return false;
    if (prevDeps.length !== nextDeps.length) return false;

    for (let i = 0; i < prevDeps.length; i++) {
      if (prevDeps[i] !== nextDeps[i]) {
        return false;
      }
    }
    return true;
  }

  if (!memoizedRef.current || !areEqual(memoizedRef.current.deps, deps)) {
    memoizedRef.current = {
      value: cb(),
      deps,
    };
  }

  return memoizedRef.current.value;
};

export default useCustomMemo;


export default function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const squaredCounter1 = () => {
    console.log("squaredCounter1");
    return counter1 * counter1;
  };

  // const memoizedSquare = useMemo(squaredCounter1, [counter1]);

  const memoizedSquare = useCustomMemo(squaredCounter1, [counter1]);

  const handleIncrement = () => {
    setCounter1((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCounter2((prev) => prev - 1);
  };

  return (
    <div className="App">
      <p>Counter 1: {counter1}</p>
      <p>Squared Value : {memoizedSquare}</p>
      <button onClick={handleIncrement}>Increment</button>

      <div>
        <p>Counter 2: {counter2} </p>
        <button onClick={handleDecrement}>Decrement </button>
      </div>
    </div>
  );
}


// https://www.youtube.com/watch?v=2fEW-5ZyQMc