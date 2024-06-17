import { useState } from "react";

export default function Card({ card, index, allCards }) {
  const [cards, setCards] = useState(allCards);

  const handleCardClick = () => {
    const updatedCards = [...cards];
    updatedCards[index] = {
      ...updatedCards[index],
      show: !updatedCards[index].show,
    };
    setCards(updatedCards);
  };
  return (
    <div className="col-md-6 mb-3 mb-sm-0 mt-4">
      <div
        onClick={handleCardClick}
        className="card"
        style={{
          backgroundColor: cards[index]?.show ? "green" : "#f6f6f6",
          color: cards[index]?.show ? "white" : "black",
          border: "none",
        }}
      >
        <div className="card-body p-5">
          <h4 className="p-5 d-flex justify-content-center align-items-center">
            {cards[index]?.show ? card.answer : card.question}
          </h4>
        </div>
      </div>
    </div>
  );
}
