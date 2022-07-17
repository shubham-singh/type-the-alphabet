export default function AlphabetCard({
    alphabet,
    highScore,
    score,
    numberOfSuccess,
  }: {
    alphabet: string;
    highScore: number;
    score: number;
    numberOfSuccess: number;
  }) {
    function winningMessage(
      numberOfSuccess: number,
      score: number,
      highScore: number
    ) {
      if (numberOfSuccess >= 20 && score === highScore) {
        return <h1>Woah! This is your best time</h1>;
      }
      if (numberOfSuccess >= 20) {
        return <h1>Success!</h1>;
      }
      return null;
    }
    return (
      <div className="AlphabetCard">
        {winningMessage(numberOfSuccess, score, highScore)}
        {numberOfSuccess < 20 && <h1>{alphabet}</h1>}
      </div>
    );
  }
  