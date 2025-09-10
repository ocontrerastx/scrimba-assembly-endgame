import { useState } from "react";
import { languages } from "../languages";
import { clsx } from "clsx";
import "./App.css";

function App() {
  // State Values
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);

  // Derived Values
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

  // Static Values
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  const languageElements = languages.map((language, index) => {
    const styles = {
      backgroundColor: language.backgroundColor,
      color: language.color,
    };

    const isLanguageLost = index < wrongGuessCount;

    return (
      <span
        key={language.name}
        style={styles}
        className={clsx("chip", { lost: isLanguageLost })}
      >
        {language.name}
      </span>
    );
  });

  const letterElements = currentWord.split("").map((letter, index) => (
    <span key={index} className="letter">
      {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
    </span>
  ));

  const keyboardElements = alphabet.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);

    return (
      <button
        className={clsx({ correct: isCorrect, wrong: isWrong })}
        onClick={() => addGuessedLetter(letter)}
        key={letter}
      >
        {letter}
      </button>
    );
  });

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className="game-status">
        <h2>You Win!</h2>
        <p>Well done! 🎉</p>
      </section>
      <section className="language-chips">{languageElements}</section>
      <section className="word">{letterElements}</section>
      <section className="keyboard">{keyboardElements}</section>
      {isGameOver && <button className="new-game">New Game</button>}
    </main>
  );
}

export default App;
