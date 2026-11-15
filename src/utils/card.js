export function createCard(url, description, clicked = false) {
  return {
    id: crypto.randomUUID(),
    url,
    description,
    clicked,
  };
}

export const sampleCards = [
  createCard("./assets/holder.jpg", "Holder Image 1"),
  createCard("./assets/holder.jpg", "Holder Image 2"),
  createCard("./assets/holder.jpg", "Holder Image 3"),
];

export function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}
