import Card from "../card/Card.jsx";
import "./flashTheCards.css";
import React from "react";

export default function FlashTheCards() {
    const details = [
        {
            id: 1,
            question: "JS stands for:",
            answer: "JavaScript",
            show: false
            
        },
        {
            id:2,
            question: "CSS stands For:",
            answer: "Cascading Style Sheets",
            show: false
            
        },
        {
            id: 3,
            question: "HTML stands For",
            answer: "Hyper Text Markup Language",
            show: false
            
        },
        {
            id: 4,
            question: "What Language is React based on?",
            answer: "JavaScript",
            show: false
            
        },
        {
            id: 5,
            question: "What is JavaScript?",
            answer: "JavaScript is Programming Language.",
            show: false
            
        },
        {
            id: 6,
            question: "what is ReactJS?",
            answer: "ReactJS is JavaScript Framework.",
            show: false
            
        },
    ]

    const [cardsDetails , setCardsDetails] = React.useState(details)

  return (
    <div
      className="container-fluid "
    >
      <div className="row">
        <div className="col-12 mt-4">
          <h1 className="d-flex justify-content-center align-items-center heading">
            Flash The Cards
          </h1>
        </div>



        {cardsDetails.map((card , index) => (
            // console.log(index),
            // console.log(card),

            <Card card={card} key={card.id} index={index} allCards={cardsDetails} />
            
        ))}

      </div>
    </div>
  );
}


