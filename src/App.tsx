import { useState } from "react";
import "./App.css";
import HangManDrawing from "./HangManDrawing";
import HangManWord from "./HangManWord";
import Keyboard from "./Keyboard";

const words = ["asd", "wsfe", "dfg", "acdf"];

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters=guessedLetters.filter(letter=>!wordToGuess.includes(letter))
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
        <HangManDrawing numberOfGuesses={incorrectLetters.length} />
        <HangManWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />

        <div style={{ alignSelf: "stretch" }}>
          <Keyboard />
        </div>
      </div>
    </div>
  );
}

export default App;
