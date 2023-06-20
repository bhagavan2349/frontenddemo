import React from 'react';
import Card from './Card';

const CardList = ({ cards }) => {
  return (
    <div>
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};

export default CardList;
