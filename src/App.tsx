import "./App.css";
import { Gameplay } from "./components/Gameplay";

function App() {

  return (
    <div className="App">
      <h1>Type The Alphabet</h1>
      <h4>Typing game to see how fast you type. Timer starts when you do :)</h4>
      <Gameplay />
    </div>
  );
}

export default App;
