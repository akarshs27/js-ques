import { useState, useEffect, useRef, useCallback } from "react";

const useThrottle = (callback, delay) => {
  const lastCalled = useRef(0);

  const throttledFn = useCallback(
    (...args) => {
      const now = Date.now();
      if (now - lastCalled.current >= delay) {
        lastCalled.current = now;
        callback(...args);
      }
    },
    [callback, delay]
  );

  return throttledFn;
};

export default function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function handleWindowSizeChange() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  const throttledSizeChange = useThrottle(handleWindowSizeChange, 1000);

  useEffect(() => {
    window.addEventListener("resize", throttledSizeChange);

    return () => {
      window.removeEventListener("resize", throttledSizeChange);
    };
  }, []);

  return (
    <div className="App">
      <p>
        Width {windowSize.width} - Height {windowSize.height}
      </p>
    </div>
  );
}
