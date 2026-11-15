import "../style/CardDisplay.css";

export default function Card({ url, description, onclick }) {
  // Display the card with info in the card data scructure
  return (
    <div className="card" onClick={onclick}>
      <img src={url} width="200"></img>
      <p>{description}</p>
    </div>
  );
}
