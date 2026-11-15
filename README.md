# Pokémon Memory Card

A memory game built with React. Click every Pokémon once, but never the same one twice.

## Live Demo

[View the live demo](https://memory-card-game-from-mem.netlify.app)

## How to Play

1. Choose how many Pokémon to play with (1 to 151) and press Start.
2. Click any Pokémon card to score a point.
3. After every click, the cards shuffle into a new order.
4. Keep clicking Pokémon you have not picked yet.
5. Click the same Pokémon twice and the round ends:
   - Your score resets to 0.
   - A fresh set of random Pokémon is loaded.
6. Your highest score is kept across rounds, so try to beat it.

You win a round by clicking every Pokémon on the board exactly once.

## Features

- Random Pokémon from the original 151, fetched live from PokéAPI
- Official artwork for every card
- Cards shuffle after each correct click
- Current score and best score tracking
- Adjustable number of cards per game
- Responsive grid layout

## Tech Stack

| Category | Tool |
| --- | --- |
| UI library | React |
| Build tool | Vite |
| Language | JavaScript (ES6+), JSX |
| Styling | CSS (Grid, Flexbox) |
| Data | [PokéAPI](https://pokeapi.co/) |
| Linting | Oxlint |

## What I Learned

- Managing state across components with `useState` and props
- Fetching data on mount with `useEffect`, including cleanup
- Resetting a component by changing its `key`
- Updating state immutably (copying before shuffling or editing)
- Reading form input on submit with `FormData`
- Building layouts with CSS Grid, Flexbox and absolute positioning

## Credits

- Pokémon data and artwork from [PokéAPI](https://pokeapi.co/).
- Pokémon and Pokémon character names are trademarks of Nintendo, Game Freak and The Pokémon Company. This is a non-commercial learning project.
