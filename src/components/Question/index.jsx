import React from "react";
import { FaPlusCircle } from "react-icons/fa";

export const Question = ({ question, answer }) => {
  return (
    <details>
      <summary>
        <span className="summary__title">{question}</span>
        <span className="summary__open icon">
          <FaPlusCircle />
        </span>
      </summary>
      <p className="summary__content">{answer}</p>
    </details>
  );
};

