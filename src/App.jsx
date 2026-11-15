import { useState } from "react";
import { createCard, sampleCards, shuffleCards } from "./utils/card.js";
import Card from "./components/CardDisplay.jsx";
import "./App.css";

function App() {
  const [gameId, setGameId] = useState(crypto.randomUUID());
  const [highestScore, setHighestScore] = useState(0);

  return (
    <Game
      key={gameId}
      highestScore={highestScore}
      resetGame={() => setGameId(crypto.randomUUID())}
      setHighestScore={setHighestScore}
    />
  );
}

function Game({ highestScore, resetGame, setHighestScore }) {
  const [cards, setCards] = useState(sampleCards);

  //Fetch Pokemon image from API then populate the card with id, url, description, clicked=false, run once

  const cardsCopy = structuredClone(cards);
  shuffleCards(cardsCopy);

  let score = cards.filter((card) => card.clicked).length;

  function handleClick(id) {
    const index = cards.findIndex((card) => card.id === id);
    if (cards[index].clicked) {
      if (score > highestScore) {
        setHighestScore(score);
      }
      resetGame();
    } else {
      const newCards = structuredClone(cards);
      newCards[index].clicked = true;
      setCards(newCards);
    }
  }

  return (
    <>
      <h1>Ello</h1>
      <p>Highest Score: {highestScore}</p>
      <p>Score: {score}</p>
      {cardsCopy.map((card) => {
        return (
          <Card
            key={card.id}
            clicked={card.clicked}
            url={card.url}
            description={card.description}
            onclick={() => handleClick(card.id)}
          />
        );
      })}
    </>
  );
}

export default App;
