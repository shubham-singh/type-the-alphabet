import { useRef, useState } from "react";

export default function useScore() {
  const [score, setScore] = useState(0);
  const intervalIDRef = useRef<any>(null);

  const start = () => {
    intervalIDRef.current = setInterval(() => {
      setScore((score) => score + 1);
    }, 1000);
  };

  const penalize = () => {
    setScore((score) => score + 0.5);
  };

  const reset = () => {
    clearInterval(intervalIDRef.current);
    setScore(0);
  };

  return {
    score,
    start,
    penalize,
    reset,
  };
}
