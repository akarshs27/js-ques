import "./styles.css";
import { useRef, useState } from "react";

const useCustomUseEffect = (cb, depsArray) => {
  const isFirstRender = useRef(true);
  const prevDepsArray = useRef([]);
  const cleanUpRef = useRef(null);

  // First render
  if (isFirstRender.current) {
    isFirstRender.current = false;
    cleanUpRef.current = cb();
    return;
  }

  // depsArray or without depsArray
  let depsChanged = true; // for no depsArray

  if (depsArray) {
    depsChanged = checkIfDepsChanged(prevDepsArray.current, depsArray);
  }

  if (depsChanged) {
    if (typeof cleanUpRef.current === "function") {
      cleanUpRef.current();
    }
    cb();
  }

  prevDepsArray.current = depsArray;
};

function checkIfDepsChanged(prev, next) {
  let hasDepsChanged = false;
  if (!next.length) {
    hasDepsChanged = false;
  }

  for (let i = 0; i < next.length; i++) {
    hasDepsChanged = !Object.is(prev[i], next[i]);
    if (hasDepsChanged) {
      break;
    }
  }

  return hasDepsChanged;
}

export default function App() {
  const [count, setCount] = useState(0);

  useCustomUseEffect(() => {
    console.log("Current count value -- 1", count);
  });

  useCustomUseEffect(() => {
    console.log("Current count value", count);
  }, []);

  useCustomUseEffect(() => {
    console.log("Current count value -- 2", count);

    return () => {
      console.log("cleanup");
    };
  }, [count]);

  return (
    <div className="App">
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <p>{count} </p>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
}
