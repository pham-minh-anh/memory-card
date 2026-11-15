import { createCard } from "./card";

const MAX_ID = 151; // original 151 Pokémon

function getRandomIds(count) {
  const ids = new Set();
  while (ids.size < count) {
    ids.add(Math.floor(Math.random() * MAX_ID) + 1);
  }
  return [...ids];
}

export async function fetchPokemon(count) {
  const requests = getRandomIds(count).map(async (id) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch Pokémon #${id}`);
    const data = await res.json();
    return createCard(
      data.sprites.other["official-artwork"].front_default,
      data.name,
    );
  });

  return Promise.all(requests); // all 10 requests run in parallel
}
