import { useState } from "react";
import "./App.css";
import HangManDrawing from "./HangManDrawing";
import HangManWord from "./HangManWord";
import Keyboard from "./Keyboard";

const words = ["sample", "wsfe", "fwefwf", "sdfsdfsf"];

function App() {
  const [wordToGuss, setWordToGuss] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}>
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Loos win</div>
      <div>
        <HangManDrawing />
        <HangManWord />

        <div style={{ alignSelf: "stretch" }}>
          <Keyboard />
        </div>
      </div>
    </div>
  );
}

export default App;
