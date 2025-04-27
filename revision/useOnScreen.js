import { useEffect, useRef, useState } from "react";
import "./styles.css";

// .App {
//   font-family: sans-serif;
//   text-align: center;
//   display: flex;
//   flex-wrap: wrap;
//   width: 100%;
//   gap: 12px;
// }

// .block {
//   width: 200px;
//   height: 60px;
//   background-color: aquamarine;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

const useOnScreen = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    },
    {
      threshold: 1,
    }
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return isIntersecting;
};

const Element = ({ index }) => {
  const ref = useRef();
  const isInViewPort = useOnScreen(ref);
  if (isInViewPort) {
    console.log(index);
  }

  return (
    <div ref={ref} class="block" key={index}>
      {index}
    </div>
  );
};

export default function App() {
  const blocks = [];
  for (let i = 0; i < 20; i++) {
    blocks.push(<Element index={i + 1} className="block" />);
  }

  return <div class="App">{blocks}</div>;
}
