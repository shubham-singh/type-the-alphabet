import { useCallback, useRef, useState } from "react";

export default function useScore() {
  const [score, setScore] = useState(0.0);
  const intervalIDRef = useRef<any>(null);

  const start = () => {
    if (!intervalIDRef.current) {
      intervalIDRef.current = setInterval(() => {
        setScore((score) => score + 0.01);
      }, 10);
    }
  };

  const penalize = () => {
    setScore((score) => score + 0.5);
  };

  const stop = useCallback(() => {
    clearInterval(intervalIDRef.current);
    intervalIDRef.current = null;
  }, []);

  const reset = () => {
    stop();
    setScore(0);
  };

  return {
    score,
    start,
    penalize,
    stop,
    reset,
  };
}
