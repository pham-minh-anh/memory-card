import { useState, useEffect } from "react";
import { createCard, sampleCards, shuffleCards } from "./utils/card.js";
import { fetchPokemon } from "./utils/pokemon.js";
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
  const [count, setCount] = useState(10);

  //Fetch Pokemon image from API then populate the card with id, url, description, clicked=false, run once
  useEffect(() => {
    async function fetchData() {
      const pokemons = await fetchPokemon(count);
      setCards(pokemons);
    }
    fetchData();
  }, [count]);

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

  function handleForm(e) {
    e.preventDefault();
    let count = Number(e.target.elements.card.value);
    e.target.elements.card.value = "";
    setCount(count);
  }

  return (
    <>
      <h1>Pokemon Memory Card</h1>
      <p className="instructions">
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
      <p className="instructions">
        The images will be shuffled after each click
      </p>
      <form onSubmit={handleForm}>
        <label htmlFor="card">How many cards do you want to play</label>
        <input id="card" name="card" type="number" min="1" max="151"></input>
        <button type="submit">Reset Count</button>
      </form>
      <div className="board">
        <div className="scoreboard">
          <p className="scores">Highest Score: {highestScore}</p>
          <p className="scores">Score: {score}</p>
        </div>
        <div className="card-grid">
          {cardsCopy.map((card) => {
            return (
              <Card
                key={card.id}
                url={card.url}
                description={card.description}
                onclick={() => handleClick(card.id)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
