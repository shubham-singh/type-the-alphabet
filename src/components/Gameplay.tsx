import React, { useEffect, useState } from "react";
import useAlphabet from "../hooks/useAlphabet";
import useLocalStorage from "../hooks/useLocalStorage";
import useScore from "../hooks/useScore";
import AlphabetCard from "./AlphabetCard";

export function Gameplay() {
  const [text, setText] = useState<string>("");

  const {
    alphabet,
    nextAlphabet,
    numberOfSuccess,
    reset: resetAlphabet,
  } = useAlphabet();

  const { score, start, penalize, stop, reset: resetScore } = useScore();

  const [highScore, setHighScore] = useLocalStorage("TTH_HIGH_SCORE", "0");

  const onUserInput = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    setText(e.target.value);

    if (
      e.nativeEvent.inputType === "deleteContentBackward" ||
      numberOfSuccess >= 20
    ) {
      return;
    }
    if (text.length === 0) {
      start();
    }
    if (e.target.value[e.target.value.length - 1]?.toUpperCase() === alphabet) {
      nextAlphabet();
    } else {
      penalize();
    }
  };

  const resetGame = () => {
    resetAlphabet();
    resetScore();
    setText("");
  };

  useEffect(() => {
    if (numberOfSuccess === 20) {
      stop();
      if (score < highScore || highScore === "0") {
        setHighScore(score);
      }
    }
  }, [numberOfSuccess, stop, highScore, setHighScore, score]);

  return (
    <>
      <AlphabetCard
        alphabet={alphabet}
        score={score}
        highScore={highScore}
        numberOfSuccess={numberOfSuccess}
      />
      <h1>Time: {score.toFixed(1)}s</h1>
      <p>
        Best Time:{" "}
        {typeof highScore === "number" ? highScore.toFixed(1) : highScore}s
      </p>
      <div className="input">
        <input
          autoFocus
          placeholder="Type here"
          value={text}
          onChange={onUserInput}
        />
        <button onClick={resetGame}>Reset</button>
      </div>
    </>
  );
}
