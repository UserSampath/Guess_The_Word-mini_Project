import { useCallback, useEffect, useState } from "react";
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
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

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
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWinner && "Winner! - Refresh to run again."}
        {isLoser && "Nice Try! - Refresh to run again."}
      </div>
      <div>
        <HangManDrawing numberOfGuesses={incorrectLetters.length} />
        <HangManWord
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess}
        />

        <div style={{ alignSelf: "stretch" }}>
          <Keyboard
            addGuessedLetter={addGuessedLetter}
            inactiveLetters={incorrectLetters}
            activeLetters={guessedLetters.filter((letter) =>
              wordToGuess.includes(letter)
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
