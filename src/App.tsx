import { useState } from 'react'
import './App.css'

const words=["sample","wsfe","fwefwf","sdfsdfsf"]

function App() {

  const [wordToGuss, setWordToGuss] = useState(() => {
    return words[Math.floor(Math.random()*words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  return (
    <>
     <h1>hi</h1>
    </>
  )
}

export default App
