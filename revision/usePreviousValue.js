import { useEffect, useRef, useState } from "react";

const usePreviousValue = (value) => {
  const previousVal = useRef();

  useEffect(() => {
    previousVal.current = value;
  }, [value]);

  return previousVal.current;
};

export default function App() {
  const [count, setCount] = useState(0);
  const previousValue = usePreviousValue(count);

  return (
    <div className="App">
      <p>count: {count}</p>
      <p>Previous count: {previousValue}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase count
      </button>
    </div>
  );
}
