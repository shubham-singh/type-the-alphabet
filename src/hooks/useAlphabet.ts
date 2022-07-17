import { useState } from "react";
import { getRandomIntInclusive } from "../utils/functions";

const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export default function useAlphabet() {
  const [alphabet, setAlphabet] = useState<string>("A");
  const [usedAlphabet, setUsedAlphabet] = useState<string[]>(["A"]);

  const nextAlphabet = () => {
    let alphabetIndex = getRandomIntInclusive(0, 25);
    
    while (usedAlphabet.includes(alphabets[alphabetIndex])) {
      if (usedAlphabet.length >= alphabets.length) {
        break;
      }
      alphabetIndex = getRandomIntInclusive(0, 25);
    }
    
    setAlphabet(alphabets[alphabetIndex]);
    setUsedAlphabet((history) => history.concat(alphabets[alphabetIndex]));
  };

  return {
    alphabet,
    nextAlphabet,
    numberOfSuccess: usedAlphabet.length,
  };
}
