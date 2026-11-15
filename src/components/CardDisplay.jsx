import "../style/CardDisplay.css";

export default function Card({ clicked, url, description, onclick }) {
  // Display the card with info in the card data scructure
  return (
    <div className="card" onClick={onclick}>
      <p>Clicked: {clicked ? "true" : "false"}</p>
      <img src={url}></img>
      <p>{description}</p>
    </div>
  );
}
