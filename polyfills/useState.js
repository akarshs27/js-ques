import { useReducer } from "react";
import "./styles.css";

// prevState: the current state

// action: what we pass into setState (or here, dispatch)

// setCount(5); // action = 5 → new state = 5
// setCount(prev => prev + 1); // action = (prev => prev + 1)

// typeof action === 'function'
//   ? action(prevState) // compute new state
//   : action            // assign directly

// useReducer((state, action) => newState, initialState)

const useMyState = (initialValue) => {
  function reducer(prevState, action) {
    return typeof action === "function" ? action(prevState) : action;
  }

  const [state, dispatch] = useReducer(reducer, initialValue);

  return [state, dispatch];
};

export default function App() {
  const [count, setCount] = useMyState(0);

  return (
    <div className="App">
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <p>{count} </p>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
}
